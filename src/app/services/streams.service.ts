import { TwitchService } from './twitch.service';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';


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
    // musza byc 1)twitch model 2)firebase model i 3)model ktory prrzekazuje do view 
    // najpierw bede sciagal z firebase potem robil query do twitcha a na koncu przerabial 
    // modele miec zapewne 2 modele z twitcha a)streams i users
    return of([1,2,3,4,5,6])
  }

  findStreamer(name:string) {
    return this.twitchService.findUser(name)
  }
}
