import { TwitchService } from './twitch.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StreamsService {

  constructor(private twitchService:TwitchService) { }
  //Filtering/Sorting Logic w Componencie zeby nie music robic kolejnych callow
  getDevLiveStreams() {
    return this.twitchService.getLiveStreams()
  }

  getAllLiveStreams() {

  }

  getAllStreamers() {

  }

  getDevStreamers() {

  }
}
