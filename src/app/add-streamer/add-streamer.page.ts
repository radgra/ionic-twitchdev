import { tap } from 'rxjs/operators';
import { StreamsService } from 'src/app/services/streams.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserTwitch } from '../models/user-twitch.model';
import { AddStreamerService } from './add-streamer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-streamer',
  templateUrl: './add-streamer.page.html',
  styleUrls: ['./add-streamer.page.scss'],
})
export class AddStreamerPage implements OnInit, OnDestroy {
  foundStreamers:UserTwitch[]
  searchInput:string = "";
  streamerAddedSub:Subscription

  constructor(private streamsService:StreamsService, 
    private addStreamerService:AddStreamerService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.streamerAddedSub = this.streamsService.streamerAdded$.pipe(
      tap(this.resetFoundStreamer.bind(this))
    ).subscribe()
  }

  
  onSearch() {
    if(!this.searchInput) return
    // pewnie trzeba unsubscribe !!!
    this.streamsService.findStreamer(this.searchInput).pipe(
      tap(console.log),
      tap(streamers => this.foundStreamers = streamers)
    ).subscribe()
    
  }
  
  onStreamerSelect(streamer) {
    this.addStreamerService.selectStreamer(streamer)
    this.router.navigate(['./','form'],{relativeTo:this.route})
  }

  resetFoundStreamer() {
    this.foundStreamers = null
    this.searchInput = ''
  }

  ngOnDestroy() {
    this.streamerAddedSub.unsubscribe()
  }


}
