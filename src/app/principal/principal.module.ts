import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrincipalPage } from './principal.page';
import { PrincipalPageRoutingModule } from './principal.router.module';
import { FriendRequestModalPageModule } from './friend-request-modal/friend-request-modal.module';

import { CategoriaAPageModule } from './categorias/categoria-a/categoria-a.module';
import { SlidesAPageModule } from './categorias/categoria-a/slides-a/slides-a.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalPageRoutingModule,
    FriendRequestModalPageModule,
    CategoriaAPageModule,
    SlidesAPageModule
  ],
  declarations: [PrincipalPage]
})
export class PrincipalPageModule {}
