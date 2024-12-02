import { Routes } from '@angular/router';
import { HomeAdministradorComponent } from '../../components/administrador';
import { AdministradorLayoutComponent } from './administrador-layout';
import { LoginAdministradorComponent } from './login-administrador';

export const administradorRoutes: Routes = [
  {
    path: '',
    component: AdministradorLayoutComponent,
    children: [
      { path: '', component: HomeAdministradorComponent },
      { path: 'home', component: HomeAdministradorComponent },
      //{ path: '**', redirectTo: 'login' },
    ],
  },
  {
    path: 'login',
    component: LoginAdministradorComponent,
  },
];
