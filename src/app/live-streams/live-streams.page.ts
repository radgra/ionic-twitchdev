import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-streams',
  templateUrl: './live-streams.page.html',
  styleUrls: ['./live-streams.page.scss'],
})
export class LiveStreamsPage implements OnInit {
  activeSegment: 'developers' | 'all' = 'developers'
  constructor() { }

  ngOnInit() {
  }

}
