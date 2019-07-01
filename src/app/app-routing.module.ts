import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login-or-register', loadChildren: './login-or-register/login-or-register.module#LoginOrRegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'categoria-a', loadChildren: './principal/categorias/categoria-a/categoria-a.module#CategoriaAPageModule' },
  { path: 'slides-a', loadChildren: './principal/categorias/categoria-a/slides-a/slides-a.module#SlidesAPageModule' },
  { path: 'categoria-b', loadChildren: './principal/categorias/categoria-b/categoria-b.module#CategoriaBPageModule' },
  { path: 'slides-b', loadChildren: './principal/categorias/categoria-b/slides-b/slides-b.module#SlidesBPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
