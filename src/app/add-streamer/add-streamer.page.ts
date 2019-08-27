import { tap } from 'rxjs/operators';
import { StreamsService } from 'src/app/services/streams.service';
import { Component, OnInit } from '@angular/core';
import { UserTwitch } from '../models/user-twitch.model';
import { AddStreamerService } from './add-streamer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-streamer',
  templateUrl: './add-streamer.page.html',
  styleUrls: ['./add-streamer.page.scss'],
})
export class AddStreamerPage implements OnInit {
  foundStreamers:UserTwitch[]
  searchInput:string = "";

  constructor(private streamsService:StreamsService, 
    private addStreamerService:AddStreamerService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
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


}
