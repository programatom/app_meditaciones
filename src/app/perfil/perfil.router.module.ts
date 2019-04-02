import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilPage } from './perfil.page';
import { EmailModalPage } from './email-modal/email-modal.page';

const routes: Routes = [
  { path: '', component: PerfilPage },
  { path: '/tabs/perfil/email-modal', component: EmailModalPage },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PerfilPageRoutingModule {}
