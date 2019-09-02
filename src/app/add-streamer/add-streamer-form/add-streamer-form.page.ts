import { StreamerFirebase } from './../../models/streamer-firebase.model';
import { StreamsService } from './../../services/streams.service';
import { UserTwitch } from './../../models/user-twitch.model';
import { AddStreamerService } from './../add-streamer.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-streamer-form',
  templateUrl: './add-streamer-form.page.html',
  styleUrls: ['./add-streamer-form.page.scss'],
})
export class AddStreamerFormPage implements OnInit {
  streamer: UserTwitch
  streamerType:'dev'|'game' = 'dev'
  constructor(private addStreamerService: AddStreamerService, private router: Router, 
    private streamsService:StreamsService, private navCtrl: NavController) { }

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

  onConfirm() {
    const newStreamer:StreamerFirebase = {
      display_name:this.streamer.display_name,
      name:this.streamer.login,
      twitch_id:this.streamer.id,
      type:this.streamerType
    }
    this.streamsService.addStreamer(newStreamer).pipe(
      tap(data => this.navCtrl.navigateBack('/tabs/add-streamer')) //navigation with back animation
    )
    .subscribe(data => console.log(data), data => console.log('error'))
  }

}
