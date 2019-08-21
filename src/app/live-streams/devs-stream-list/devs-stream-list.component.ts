import { StreamTwitch } from './../../models/stream-twitch.model';
import { StreamsService } from './../../services/streams.service';
import { Component, OnInit } from '@angular/core';
import {tap} from 'rxjs/operators'

@Component({
  selector: 'app-devs-stream-list',
  templateUrl: './devs-stream-list.component.html',
  styleUrls: ['./devs-stream-list.component.scss'],
})
export class DevsStreamListComponent implements OnInit {
  streamers:StreamTwitch[] // Potem moze przerobic w services na inna strukture modelu
  constructor(private streamsService:StreamsService) { }

  ngOnInit() {
    this.streamsService.getDevLiveStreams().pipe(
      tap(streamers => this.streamers = streamers),
      tap(console.log)
    ).subscribe()
  }

}
