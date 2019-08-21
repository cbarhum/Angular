import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent } from './components/user/user.component'
import { HomePageComponent } from './components/home-page/home-page.component'

// Atribuição de todas as rotas:
const routes: Routes = [
  {
    path:'user', //caminho
    component: UserComponent //vínculo com o component
  },
  {
    path:'usuario', //caminho
    component: UserComponent //vínculo com o component
  },
  {
    path:'home', //caminho
    component: HomePageComponent //vínculo com o component
  },
  {
    path:'inicio', //caminho
  component: HomePageComponent //vínculo com o component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
