import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SlidesAPage } from './slides-a.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesAPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),

  ],
  exports:[SlidesAPage],
  declarations: [SlidesAPage],
  entryComponents: [SlidesAPage],

})
export class SlidesAPageModule {}
