import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddStreamerFormPage } from './add-streamer-form.page';

const routes: Routes = [
  {
    path: '',
    component: AddStreamerFormPage
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
  declarations: [AddStreamerFormPage]
})
export class AddStreamerFormPageModule {}
