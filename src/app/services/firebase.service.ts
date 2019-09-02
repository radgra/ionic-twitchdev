import { take, map, tap } from 'rxjs/operators';
import { StreamerFirebase } from './../models/streamer-firebase.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {  
  private streamers: StreamerFirebase[]

  constructor(private db: AngularFirestore) { }

  getFirebaseStreamers() {
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

  addStreamer(streamer:StreamerFirebase) {
    const streamerCollection = this.db.collection<StreamerFirebase>('streamers');
    // Normal document creation
    // return from(streamerCollection.add(streamer)).pipe(
    
    // Document creaton with id - warning it doesnt check for duplicates - automaticly overwrites doc
    return from(streamerCollection.doc(streamer.name).set(streamer))
  }
}
