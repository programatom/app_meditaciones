import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaAPageModule } from '../principal/categorias/categoria-a/categoria-a.module';
import { SlidesAPageModule } from '../principal/categorias/categoria-a/slides-a/slides-a.module';
import { CategoriasNavigatorService } from './categorias-logic/categorias-navigator.service';
import { ModalCategoriasSlidesService } from './categorias-logic/modal-categorias-slides.service';

@NgModule({
  imports: [
    CommonModule,
    CategoriaAPageModule,
    SlidesAPageModule
  ],
  providers:[
    CategoriasNavigatorService,
    ModalCategoriasSlidesService,


  ]
})
export class ServicesModule { }
