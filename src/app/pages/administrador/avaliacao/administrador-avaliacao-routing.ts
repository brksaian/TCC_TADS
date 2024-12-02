import { Routes } from '@angular/router';
import { HomeAvaliacoesADMComponent } from '../../../components/administrador';

export const administradorAvaliacaoRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeAvaliacoesADMComponent,
      },
      {
        path: '',
        component: HomeAvaliacoesADMComponent,
      },
    ],
  },
];
