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
  },
  {
    path: 'tela-de-cadastro',
    loadComponent: () => import('./tela-de-cadastro/tela-de-cadastro.page').then( m => m.TelaDeCadastroPage)
  },
  {
    path: 'info-family/:id',
    loadComponent: () => import('./info-family/info-family.page').then( m => m.InfoFamilyPage)
  },
  {
    path: 'realizar-entrega',
    loadComponent: () => import('./realizar-entrega/realizar-entrega.page').then( m => m.RealizarEntregaPage)
  }
];
