import { Streamer } from './../../models/streamer.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-streamer-item',
  templateUrl: './streamer-item.component.html',
  styleUrls: ['./streamer-item.component.scss'],
})
export class StreamerItemComponent implements OnInit {
  @Input() streamer:Streamer
  constructor() { }

  ngOnInit() {
    console.log(this.streamer);
    
  }

}
