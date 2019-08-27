import { UserTwitch } from './../../models/user-twitch.model';
import { AddStreamerService } from './../add-streamer.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-streamer-form',
  templateUrl: './add-streamer-form.page.html',
  styleUrls: ['./add-streamer-form.page.scss'],
})
export class AddStreamerFormPage implements OnInit {
  streamer: UserTwitch
  constructor(private addStreamerService: AddStreamerService, private router: Router) { }

  ngOnInit() {
    this.addStreamerService.getSelectedStreamer().pipe(
      tap(streamer => {
        if(!streamer) {
          this.router.navigate(['/','tabs','add-streamer'])
        }
        this.streamer = streamer

      })
    ).subscribe()
  }

}
