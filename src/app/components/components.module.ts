import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { LoaderComponent } from './loader/loader.component';
import { ToolbarCategoriaComponent } from './toolbar-categoria/toolbar-categoria.component';
import { CategoriaAMiniComponent } from './categoria-a-mini/categoria-a-mini.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [ProgressBarComponent, LoaderComponent, ToolbarCategoriaComponent, CategoriaAMiniComponent],
  exports: [ProgressBarComponent, LoaderComponent, ToolbarCategoriaComponent, CategoriaAMiniComponent]
})
export class ComponentsModule {}
