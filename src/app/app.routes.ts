import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCadastroComponent, LoginComponent } from './pages/user';
import {
  HomeAdministradorComponent,
  HomeAvaliacoesADMComponent,
  HomeEstabelecimentosADMComponent,
  HomeProdutosADMComponent,
  HomeUsuariosADMComponent,
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
  {
    path: 'administrador/usuarios/home-usuarios-adm',
    component: HomeUsuariosADMComponent,
  },
  {
    path: 'administrador/avaliacoes/home-avaliacoes-adm',
    component: HomeAvaliacoesADMComponent,
  },
  {
    path: 'administrador/estabelecimentos/home-estabelecimentos-adm',
    component: HomeEstabelecimentosADMComponent,
  },
  {
    path: 'administrador/produtos/home-produtos-adm',
    component: HomeProdutosADMComponent,
  },
  //{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // outras rotas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
