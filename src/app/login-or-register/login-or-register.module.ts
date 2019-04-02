import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginOrRegisterPage } from './login-or-register.page';

const routes: Routes = [
  {
    path: '',
    component: LoginOrRegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginOrRegisterPage]
})
export class LoginOrRegisterPageModule {}
