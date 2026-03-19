import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'lista-familias',
    loadComponent: () => import('./lista-familias/lista-familias.page').then( m => m.ListaFamiliasPage)
  },
  {
    path: 'cadastro-familia',
    loadComponent: () => import('./cadastro-familia/cadastro-familia.page').then( m => m.CadastroFamiliaPage)
  },
  {
    path: 'detalhes-familia',
    loadComponent: () => import('./detalhes-familia/detalhes-familia.page').then( m => m.DetalhesFamiliaPage)
  },
  {
    path: 'realizar-entrega',
    loadComponent: () => import('./realizar-entrega/realizar-entrega.page').then( m => m.RealizarEntregaPage)
  }
];
