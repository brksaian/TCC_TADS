import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCadastroComponent, LoginComponent } from './pages/user';
//Integrado 12/11//
import {
  HomeAdministradorComponent,
  LoginAdministradorComponent,
} from './components/administrador';
import { NovoEnderecoComponent } from './components/endereco';
import { NovaPromocaoComponent } from './components/promocao';

export const routes: Routes = [
  {
    path: 'consumidor',
    loadChildren: () =>
      import('./pages/consumidor').then((m) => m.clientRoutes),
  },
  {
    path: 'estabelecimento',
    loadChildren: () =>
      import('./pages/estabelecimento').then((m) => m.estabelecimentoRoutes),
  },
  {
    path: 'guest',
    loadChildren: () => import('./pages/user').then((m) => m.guestRoutes),
  },
  {
    path: 'administrador',
    loadChildren: () =>
      import('./pages/administrador').then((m) => m.administradorRoutes),
  },
  {
    path: 'produto',
    loadChildren: () => import('./pages/produto').then((m) => m.produtoRoutes),
  },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: AutoCadastroComponent },
  // { path: '**', redirectTo: '/guest/home' },
  { path: 'endereco/novo-endereco', component: NovoEnderecoComponent },
  { path: 'promocao/nova-promocao', component: NovaPromocaoComponent },
  {
    path: 'administrador/login-administrador',
    component: LoginAdministradorComponent,
  },
  {
    path: 'administrador/home-administrador',
    component: HomeAdministradorComponent,
  },
  //{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // outras rotas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
