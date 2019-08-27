import { UserTwitch } from './../models/user-twitch.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddStreamerService {
  private selectedStreamer$:BehaviorSubject<UserTwitch> =  new BehaviorSubject(null)
  
  constructor() { }

  getSelectedStreamer() {
    return this.selectedStreamer$.asObservable()
  }

  selectStreamer(streamer:UserTwitch) {
    this.selectedStreamer$.next(streamer)
  }
}
