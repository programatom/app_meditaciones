import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [ProgressBarComponent, LoaderComponent],
  exports: [ProgressBarComponent, LoaderComponent]
})
export class ComponentsModule {}
