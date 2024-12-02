import { Routes } from '@angular/router';
import { HomeAvaliacoesADMComponent } from '../../../components/administrador';

export const administradorAvaliacaoRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'administrador/avaliacoes/home-avaliacoes-adm',
        component: HomeAvaliacoesADMComponent,
      },
    ],
  },
];
