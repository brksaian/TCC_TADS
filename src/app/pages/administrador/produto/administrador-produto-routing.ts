import { Routes } from '@angular/router';
import {
  HomeProdutosADMComponent,
  ProdutosSemCategoriaAdmComponent,
  ProdutosSemImagemAdmComponent,
} from '../../../components/administrador';

export const administradorProdutoRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeProdutosADMComponent,
      },
      {
        path: 'sem-categoria',
        component: ProdutosSemCategoriaAdmComponent,
      },
      {
        path: 'sem-imagem',
        component: ProdutosSemImagemAdmComponent,
      },
    ],
  },
];
