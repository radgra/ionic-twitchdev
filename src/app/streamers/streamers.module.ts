import { AllStreamersListComponent } from './all-streamers-list/all-streamers-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StreamersPage } from './streamers.page';
import { DevStreamersListComponent } from './dev-streamers-list/dev-streamers-list.component';
import { SharedModule } from '../shared/shared.module';
import { StreamerItemComponent } from './streamer-item/streamer-item.component';

const routes: Routes = [
  {
    path: '',
    component: StreamersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StreamersPage, AllStreamersListComponent, DevStreamersListComponent, StreamerItemComponent]
})
export class StreamersPageModule {}
