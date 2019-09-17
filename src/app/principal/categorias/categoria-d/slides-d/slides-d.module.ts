import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SlidesDPage } from './slides-d.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesDPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),

  ],
  exports:[SlidesDPage],
  declarations: [SlidesDPage],
  entryComponents: [SlidesDPage],

})
export class SlidesDPageModule {}
