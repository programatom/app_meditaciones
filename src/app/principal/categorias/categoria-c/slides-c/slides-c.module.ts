import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SlidesCPage } from './slides-c.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesCPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),

  ],
  exports:[SlidesCPage],
  declarations: [SlidesCPage],
  entryComponents: [SlidesCPage],

})
export class SlidesCPageModule {}
