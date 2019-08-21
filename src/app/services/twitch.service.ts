import { StreamTwitch } from './../models/stream-twitch.model';
import { Injectable } from '@angular/core';
import streamMock from './stream.mock';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class TwitchService {
  streams:StreamTwitch[] = streamMock
  constructor() { }

  // pozniej bede przekazywal array streamerow
  getLiveStreams() {
    return of(this.streams)
  }
}
