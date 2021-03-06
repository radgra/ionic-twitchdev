import { Streamer } from 'src/app/models/streamer.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stream-item',
  templateUrl: './stream-item.component.html',
  styleUrls: ['./stream-item.component.scss'],
})
export class StreamItemComponent implements OnInit {
  @Input() stream:Streamer
  constructor() { }

  ngOnInit() {
    console.log(this.stream);
    
  }

}