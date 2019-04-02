import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FriendRequestModalPage } from './friend-request-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FriendRequestModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FriendRequestModalPage]
})
export class FriendRequestModalPageModule {}
