import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalPage } from './principal.page';
import { PrincipalPageRoutingModule } from './principal.router.module';
import { FriendRequestModalPageModule } from './friend-request-modal/friend-request-modal.module';

import { CategoriaAPageModule } from './categorias/categoria-a/categoria-a.module';
import { SlidesAPageModule } from './categorias/categoria-a/slides-a/slides-a.module';
import { ContribuiModalPageModule } from '../perfil/contribui-modal/contribui-modal.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalPageRoutingModule,
    FriendRequestModalPageModule,
    CategoriaAPageModule,
    SlidesAPageModule,
    ContribuiModalPageModule
  ],
  declarations: [PrincipalPage]
})
export class PrincipalPageModule {}
