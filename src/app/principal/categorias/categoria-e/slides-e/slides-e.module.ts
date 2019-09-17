import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SlidesEPage } from './slides-e.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesEPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),

  ],
  exports:[SlidesEPage],
  declarations: [SlidesEPage],
  entryComponents: [SlidesEPage],

})
export class SlidesEPageModule {}
