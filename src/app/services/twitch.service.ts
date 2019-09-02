import { UserTwitch } from './../models/user-twitch.model';
import { StreamTwitch } from './../models/stream-twitch.model';
import { Injectable } from '@angular/core';
import streamMock from './stream.mock';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class TwitchService {
  streams:StreamTwitch[] 
  users:UserTwitch[] 
  constructor(private http: HttpClient) { }

  // pozniej bede przekazywal array streamerow
  getLiveStreams(users:string[]):Observable<StreamTwitch[]> {
    const headers = new HttpHeaders({
      "Client-ID":"cj84lmkieeuejx4eewqccr389dqp97"
    })
    if(this.streams) return of(this.streams)

    const params = users.reduce((params,curr) => {
      return params.append('user_login', curr)
    },new HttpParams())
    return this.http.get<StreamTwitch[]>('https://api.twitch.tv/helix/streams',{headers,params}).pipe(
      map((data:any) => data.data)
    )

  }

  findUser(name:string):Observable<UserTwitch[]> {
    const headers = new HttpHeaders({
      "Client-ID":"cj84lmkieeuejx4eewqccr389dqp97"
    })


    return this.http.get<UserTwitch[]>('https://api.twitch.tv/helix/users?login='+name,{headers}).pipe(
      map((data:any) => data.data)
    )
  }

  getUsers(users:string[]):Observable<UserTwitch[]> {
    const headers = new HttpHeaders({
      "Client-ID":"cj84lmkieeuejx4eewqccr389dqp97"
    })
    if(this.users) return of(this.users)

    const params = users.reduce((params,curr) => {
      return params.append('login', curr)
    },new HttpParams())
    return this.http.get<UserTwitch[]>('https://api.twitch.tv/helix/users',{headers,params}).pipe(
      map((data:any) => data.data)
    )
  }
}
