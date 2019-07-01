import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SlidesBPage } from './slides-b.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesBPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),

  ],
  exports:[SlidesBPage],
  declarations: [SlidesBPage],
  entryComponents: [SlidesBPage],

})
export class SlidesBPageModule {}
