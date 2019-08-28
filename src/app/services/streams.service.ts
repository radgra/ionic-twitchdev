import { UserTwitch } from './../models/user-twitch.model';
import { tap, map, take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { StreamerFirebase } from './../models/streamer-firebase.model';
import { TwitchService } from './twitch.service';
import { Injectable } from '@angular/core';
import { of, from, Subject, Observable, combineLatest } from 'rxjs';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class StreamsService {
  private streamers: StreamerFirebase[]
  private streamerAddedSubject$:Subject<null> = new Subject()
  streamerAdded$:Observable<null> = this.streamerAddedSubject$.asObservable()

  constructor(private twitchService:TwitchService, private db: AngularFirestore, private toastController:ToastController) { }
  //Filtering/Sorting Logic w Componencie zeby nie music robic kolejnych callow
  getDevLiveStreams() {
    return this.twitchService.getLiveStreams()
  }

  getAllLiveStreams() {
    
  }
  
  getAllStreamers() {
  }
  
  getDevStreamers() {
    // musza byc 1)twitch model 2)firebase model i 3)model ktory prrzekazuje do view 
    // najpierw bede sciagal z firebase potem robil query do twitcha a na koncu przerabial 
    // modele miec zapewne 2 modele z twitcha a)streams i users
    return of([1,2,3,4,5,6])
  }

  private getFirebaseStreamers() {
    // czy musze unsubscribe ?
    if(this.streamers) {
      return of(this.streamers)
    }
    return this.db.collection<StreamerFirebase>('streamers').snapshotChanges().pipe(
      take(1), // czy take one unsubscribes ?
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as StreamerFirebase;
        const id = a.payload.doc.id;
        return { id, ...data };
      })),
      tap(streamers => this.streamers = streamers)
    )
  }

  findStreamer(name:string) {
    const findUser$ =  this.twitchService.findUser(name)
    const firebaseStreamers$ = this.getFirebaseStreamers()

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
    const streamerCollection = this.db.collection<StreamerFirebase>('streamers');
    // Normal document creation
    // return from(streamerCollection.add(streamer)).pipe(
    
    // Document creaton with id - warning it doesnt check for duplicates - automaticly overwrites doc
    return from(streamerCollection.doc(streamer.name).set(streamer)).pipe(
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
