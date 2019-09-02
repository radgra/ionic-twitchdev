import { Component, OnInit, Input } from '@angular/core';
import { StreamsService } from 'src/app/services/streams.service';
import { tap } from 'rxjs/operators';
import { Streamer } from 'src/app/models/streamer.model';

@Component({
  selector: 'app-dev-streamers-list',
  templateUrl: './dev-streamers-list.component.html',
  styleUrls: ['./dev-streamers.component.scss'],
})
export class DevStreamersListComponent implements OnInit {
  @Input() streamers:Streamer //potem zmienic
  constructor(private streamsService:StreamsService) { }

  ngOnInit() {
    
  }

}
