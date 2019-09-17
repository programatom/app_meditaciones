import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { LoaderComponent } from './loader/loader.component';
import { ToolbarCategoriaComponent } from './toolbar-categoria/toolbar-categoria.component';
import { CategoriaAMiniComponent } from './categoria-a-mini/categoria-a-mini.component';
import { CategoriaBMiniComponent } from './categoria-b-mini/categoria-b-mini.component';
import { CategoriaCMiniComponent } from './categoria-c-mini/categoria-c-mini.component';
import { CategoriaEMiniComponent } from './categoria-e-mini/categoria-e-mini.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [ProgressBarComponent, LoaderComponent, ToolbarCategoriaComponent, CategoriaAMiniComponent,CategoriaBMiniComponent,CategoriaCMiniComponent,CategoriaEMiniComponent],
  exports: [ProgressBarComponent, LoaderComponent, ToolbarCategoriaComponent, CategoriaAMiniComponent,CategoriaBMiniComponent,CategoriaCMiniComponent,CategoriaEMiniComponent]
})
export class ComponentsModule {}
