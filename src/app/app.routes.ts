import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },  {
    path: 'realizar-entrega',
    loadComponent: () => import('./realizar-entrega/realizar-entrega.page').then( m => m.RealizarEntregaPage)
  },

];
