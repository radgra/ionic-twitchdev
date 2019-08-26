import { tap } from 'rxjs/operators';
import { StreamsService } from 'src/app/services/streams.service';
import { Component, OnInit } from '@angular/core';
import { UserTwitch } from '../models/user-twitch.model';

@Component({
  selector: 'app-add-streamer',
  templateUrl: './add-streamer.page.html',
  styleUrls: ['./add-streamer.page.scss'],
})
export class AddStreamerPage implements OnInit {
  foundStreamers:UserTwitch[]
  searchInput:string = "";

  constructor(private streamsService:StreamsService) { }

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

  // Czy streamer form ma by page czy tylko componentem ?

}
