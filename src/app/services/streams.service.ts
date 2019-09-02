import { FirebaseService } from './firebase.service';
import { Streamer } from './../models/streamer.model';
import { UserTwitch } from './../models/user-twitch.model';
import { tap, map, take, shareReplay, switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { StreamerFirebase } from './../models/streamer-firebase.model';
import { TwitchService } from './twitch.service';
import { Injectable } from '@angular/core';
import { of, from, Subject, Observable, combineLatest, forkJoin } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { StreamTwitch } from '../models/stream-twitch.model';


@Injectable({
  providedIn: 'root'
})
export class StreamsService {
  // private streamers: StreamerFirebase[]
  private streamerAddedSubject$:Subject<null> = new Subject()
  streamerAdded$:Observable<null> = this.streamerAddedSubject$.asObservable()

  constructor(private twitchService:TwitchService, 
    private firebaseService:FirebaseService,
    private toastController:ToastController) { }
  //Filtering/Sorting Logic w Componencie zeby nie music robic kolejnych callow

  getAllLiveStreams() {
    const streamers = this.getAllStreamers().pipe(shareReplay())
    const streams = streamers.pipe(
      switchMap(streamers => {
        const streamerLogins = streamers.map(st => st.name)
        return this.twitchService.getLiveStreams(streamerLogins)
      })
    )
    return forkJoin(streams, streamers).pipe(
      map((data:[StreamTwitch[], Streamer[]]) => {
        const [tStreams,tStreamers] = data
        return tStreamers.map((st:Streamer) => {
          const foundStream = tStreams.find(tst => tst.user_name.toLowerCase() === st.name)
          st.stream = foundStream
          return st
        })
      }),
      map(streamers => {
        return streamers.filter(st => st.stream)
      })
    )
  }
  
  getAllStreamers():Observable<Streamer[]> {
    const firebaseStreamers = this.firebaseService.getFirebaseStreamers().pipe(shareReplay())
    const twitchStreamers = firebaseStreamers.pipe(
      switchMap(streamers => {
        const streamerLogins = streamers.map(st => st.name)
        return this.twitchService.getUsers(streamerLogins)
      })
    )

    return forkJoin(firebaseStreamers, twitchStreamers).pipe(
      map((data:[StreamerFirebase[], UserTwitch[]]) => {
        const [fStreamers,tStreamers] = data
        return fStreamers.map(st => {
          const foundUser = tStreamers.find(tst => tst.login === st.name)
          return {name:st.name, firebase:st, user:foundUser} as Streamer
        })
      })
    )
    
  }


  findStreamer(name:string) {
    const findUser$ =  this.twitchService.findUser(name)
    const firebaseStreamers$ = this.firebaseService.getFirebaseStreamers()

    // adding user.added flag to users that already exist in firebase
    return combineLatest(findUser$, firebaseStreamers$).pipe(
      map((data:[UserTwitch[], StreamerFirebase[]]) => {
        const [twitchUsers, streamers] = data
        return twitchUsers.map(user => {
          const foundUser = streamers.find(st => st.name === user.login)
          if(foundUser) {
            user.added = true
          }
          return user
        })
      })
    )
  }
  
  addStreamer(streamer:StreamerFirebase) {
    return this.firebaseService.addStreamer(streamer).pipe(
      tap(streamer => this.streamerAddedSubject$.next()),
      tap(streamer => this.presentToast())
    )
  }

  presentToast() {
    this.toastController.create({
      message:"Streamer Added",
      duration:1000,
      color:"dark",
    }).then(toast => toast.present())
  }
}
