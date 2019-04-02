import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilPage } from './perfil.page';
import { PerfilPageRoutingModule } from './perfil.router.module';
import { EmailModalPageModule } from './email-modal/email-modal.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    EmailModalPageModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
