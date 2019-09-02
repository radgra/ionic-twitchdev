import { Streamer } from './../../models/streamer.model';
import { StreamTwitch } from './../../models/stream-twitch.model';
import { StreamsService } from './../../services/streams.service';
import { Component, OnInit, Input } from '@angular/core';
import {tap} from 'rxjs/operators'

@Component({
  selector: 'app-devs-stream-list',
  templateUrl: './devs-stream-list.component.html',
  styleUrls: ['./devs-stream-list.component.scss'],
})
export class DevsStreamListComponent implements OnInit {
  @Input() streams:Streamer[] // Potem moze przerobic w services na inna strukture modelu
  constructor() { }

  ngOnInit() {
    console.log(this.streams);
    
  }

}
