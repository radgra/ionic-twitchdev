import { UserTwitch } from './../models/user-twitch.model';
import { StreamTwitch } from './../models/stream-twitch.model';
import { Injectable } from '@angular/core';
import streamMock from './stream.mock';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class TwitchService {
  streams:StreamTwitch[] = streamMock
  constructor(private http: HttpClient) { }

  // pozniej bede przekazywal array streamerow
  getLiveStreams() {
    return of(this.streams)
  }

  findUser(name:string):Observable<UserTwitch[]> {
    const headers = new HttpHeaders({
      "Client-ID":"cj84lmkieeuejx4eewqccr389dqp97"
    })


    return this.http.get<UserTwitch[]>('https://api.twitch.tv/helix/users?login='+name,{headers}).pipe(
      map((data:any) => data.data)
    )
  }
}
