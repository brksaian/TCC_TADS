import { Routes } from '@angular/router';
import {
  EstabelecimentosPendentesAprovacaoComponent,
  HomeEstabelecimentosADMComponent,
} from '../../../components/administrador';

export const administradorEstabelecimentoRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeEstabelecimentosADMComponent,
      },
      {
        path: 'pendentes-aprovacao',
        component: EstabelecimentosPendentesAprovacaoComponent,
      },
    ],
  },
];
