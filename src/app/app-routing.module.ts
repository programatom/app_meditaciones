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
  { path: 'categoria-c', loadChildren: './principal/categorias/categoria-c/categoria-c.module#CategoriaCPageModule' },
  { path: 'slides-c', loadChildren: './principal/categorias/categoria-c/slides-c/slides-c.module#SlidesCPageModule' },
  { path: 'categoria-d', loadChildren: './principal/categorias/categoria-d/categoria-d.module#CategoriaDPageModule' },
  { path: 'slides-d', loadChildren: './principal/categorias/categoria-d/slides-d/slides-d.module#SlidesDPageModule' },
  { path: 'categoria-e', loadChildren: './principal/categorias/categoria-e/categoria-e.module#CategoriaEPageModule' },
  { path: 'slides-e', loadChildren: './principal/categorias/categoria-e/slides-e/slides-e.module#SlidesEPageModule' },
  { path: 'slides-inicio', loadChildren: './slides-inicio/slides-inicio.module#SlidesInicioPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
