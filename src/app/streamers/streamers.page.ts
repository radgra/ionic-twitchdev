import { Streamer } from './../models/streamer.model';
import { StreamsService } from './../services/streams.service';
import { Component, OnInit } from '@angular/core';
import { shareReplay, filter, switchMap, toArray, tap } from 'rxjs/operators';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-streamers',
  templateUrl: './streamers.page.html',
  styleUrls: ['./streamers.page.scss'],
})
export class StreamersPage implements OnInit {
  activeSegment: 'developers' | 'all' = 'developers'
  devStreamers$: Observable<Streamer[]>
  gameStreamers$: Observable<Streamer[]>
  constructor(private streamsService:StreamsService) { }

  ngOnInit() {
    // 1. streamerow z firebase
    // 2. user request z twitcha - tam nie ma last stream
    // 3. potem live streams
    // jak zrobic caching ?
    // get firebase streamers/pipe/gettwitchstreamers/map/return all
    const streamers = this.streamsService.getAllStreamers().pipe(
      tap(d => console.log("called")),
      shareReplay(), 
      switchMap(data => from(data)),
      )

    this.devStreamers$ = streamers.pipe(
      filter((streamer:Streamer) => streamer.firebase.type === 'dev'),
      toArray()
    )
    
    this.gameStreamers$ = streamers.pipe(
      filter((streamer:Streamer) => streamer.firebase.type === "game"),
      toArray()
    )
    
  }

}
