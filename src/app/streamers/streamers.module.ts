import { AllStreamersComponent } from './all-streamers/all-streamers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StreamersPage } from './streamers.page';
import { DevStreamersComponent } from './dev-streamers/dev-streamers.component';

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
    RouterModule.forChild(routes)
  ],
  declarations: [StreamersPage, AllStreamersComponent, DevStreamersComponent]
})
export class StreamersPageModule {}
