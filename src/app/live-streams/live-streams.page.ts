import { tap, shareReplay, switchMap, filter, toArray } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { Streamer } from './../models/streamer.model';
import { StreamsService } from 'src/app/services/streams.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-streams',
  templateUrl: './live-streams.page.html',
  styleUrls: ['./live-streams.page.scss'],
})
export class LiveStreamsPage implements OnInit {
  activeSegment: 'devs' | 'games' = 'devs'
  devStreams$:Observable<Streamer[]>
  gameStreams$:Observable<Streamer[]>
  constructor(private streamsService:StreamsService) { }

  ngOnInit() {
    const streams = this.streamsService.getAllLiveStreams().pipe(
      tap(d => console.log("called",d)),
      shareReplay(), 
      switchMap(data => from(data)),
      )

    this.devStreams$ = streams.pipe(
      filter((streamer:Streamer) => streamer.firebase.type === 'dev'),
      toArray(),
      tap(console.log)
    )
    
    this.gameStreams$ = streams.pipe(
      filter((streamer:Streamer) => streamer.firebase.type === "game"),
      toArray()
    )
  }

}
