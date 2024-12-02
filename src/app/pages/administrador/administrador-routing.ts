import { Routes } from '@angular/router';
import { HomeAdministradorComponent } from '../../components/administrador';
import { AuthGuard } from '../../guards';
import { AdministradorLayoutComponent } from './administrador-layout';
import { administradorAvaliacaoRoutes } from './avaliacao';
import { administradorEstabelecimentoRoutes } from './estabelecimento';
import { administradorProdutoRoutes } from './produto';
import { administradorUserRoutes } from './user';

export const administradorRoutes: Routes = [
  {
    path: '',
    component: AdministradorLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeAdministradorComponent },
      { path: 'home', component: HomeAdministradorComponent },
      {
        path: 'user',
        children: administradorUserRoutes,
      },
      {
        path: 'avaliacao',
        children: administradorAvaliacaoRoutes,
      },
      {
        path: 'estabelecimento',
        children: administradorEstabelecimentoRoutes,
      },
      {
        path: 'produto',
        children: administradorProdutoRoutes,
      },
      //{ path: '**', redirectTo: 'login' },
    ],
  },
  // {
  //   path: 'login',
  //   component: LoginAdministradorComponent,
  // },
];
