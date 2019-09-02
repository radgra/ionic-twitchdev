import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { IonicModule } from '@ionic/angular';
import { StreamThumbnailPipe } from '../pipes/stream-thumbnail.pipe';



@NgModule({
  declarations: [StarRatingComponent, StreamThumbnailPipe],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    StarRatingComponent,
    StreamThumbnailPipe
  ]
})
export class SharedModule { }
