import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddStreamerPage } from './add-streamer.page';

const routes: Routes = [
  {
    path: '',
    component: AddStreamerPage
  },
  {
    path: 'form',
    loadChildren: () => import('./add-streamer-form/add-streamer-form.module').then(m => m.AddStreamerFormPageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddStreamerPage]
})
export class AddStreamerPageModule {}
