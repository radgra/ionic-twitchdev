import { Streamer } from './../../models/streamer.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-streamers-list',
  templateUrl: './all-streamers-list.component.html',
  styleUrls: ['./all-streamers.component.scss'],
})
export class AllStreamersListComponent implements OnInit {
  @Input() streamers:Streamer[]
  constructor() { }

  ngOnInit() {
    
  }

}
