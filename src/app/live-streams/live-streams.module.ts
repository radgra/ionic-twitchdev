import { AllStreamListComponent } from './all-stream-list/all-stream-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LiveStreamsPage } from './live-streams.page';
import { DevsStreamListComponent } from './devs-stream-list/devs-stream-list.component';

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
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LiveStreamsPage, AllStreamListComponent, DevsStreamListComponent]
})
export class LiveStreamsPageModule {}
