import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContribuiModalPage } from './contribui-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ContribuiModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContribuiModalPage]
})
export class ContribuiModalPageModule {}
