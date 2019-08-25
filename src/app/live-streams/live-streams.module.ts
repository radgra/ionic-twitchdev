import { AllStreamListComponent } from './all-stream-list/all-stream-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LiveStreamsPage } from './live-streams.page';
import { DevsStreamListComponent } from './devs-stream-list/devs-stream-list.component';
import { TimeSincePipe } from '../pipes/time-since.pipe';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LiveStreamsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LiveStreamsPage, AllStreamListComponent, DevsStreamListComponent, TimeSincePipe]
})
export class LiveStreamsPageModule {}
