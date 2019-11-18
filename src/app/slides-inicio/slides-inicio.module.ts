import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SlidesInicioPage } from './slides-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesInicioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),

  ],
  exports:[SlidesInicioPage],
  declarations: [SlidesInicioPage],
  entryComponents: [SlidesInicioPage],

})
export class SlidesInicioPageModule {}
