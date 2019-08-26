import { Component, OnInit } from '@angular/core';
import { StreamsService } from 'src/app/services/streams.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dev-streamers-list',
  templateUrl: './dev-streamers-list.component.html',
  styleUrls: ['./dev-streamers.component.scss'],
})
export class DevStreamersListComponent implements OnInit {
  streamers:any //potem zmienic
  constructor(private streamsService:StreamsService) { }

  ngOnInit() {
    this.streamsService.getDevStreamers().pipe(
      tap(streamers => this.streamers = streamers)
    ).subscribe()
  }

}
