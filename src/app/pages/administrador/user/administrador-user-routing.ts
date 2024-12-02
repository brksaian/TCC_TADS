import { Routes } from '@angular/router';
import { HomeUsuariosADMComponent } from '../../../components/administrador';

export const administradorUserRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeUsuariosADMComponent,
      },
    ],
  },
];
