import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPage } from './principal.page';

const routes: Routes = [
  { path: '', component: PrincipalPage },
  { path: 'categoria-a', loadChildren: './categorias/categoria-a/categoria-a.module#CategoriaAPageModule' },
  { path: 'categoria-b', loadChildren: './categorias/categoria-b/categoria-b.module#CategoriaBPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PrincipalPageRoutingModule {}
