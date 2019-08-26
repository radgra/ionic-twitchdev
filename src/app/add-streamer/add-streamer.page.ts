import { Component, OnInit } from '@angular/core';
import { UserTwitch } from '../models/user-twitch.model';

@Component({
  selector: 'app-add-streamer',
  templateUrl: './add-streamer.page.html',
  styleUrls: ['./add-streamer.page.scss'],
})
export class AddStreamerPage implements OnInit {
  foundStreamers:UserTwitch[]
  constructor() { }

  ngOnInit() {
  }

  // Czy streamer form ma by page czy tylko componentem ?

}
