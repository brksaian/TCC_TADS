import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdministradorComponent } from './components/administrador';
import { NovoEnderecoComponent } from './components/endereco';
import { NovaPromocaoComponent } from './components/promocao';
import { AuthGuard } from './guards';
import { AutoCadastroComponent, LoginComponent } from './pages/user';
import { RedirectComponent } from './redirect.component';

export const routes: Routes = [
  {
    path: 'consumidor',
    loadChildren: () =>
      import('./pages/consumidor').then((m) => m.clientRoutes),
    canActivate: [AuthGuard],
    data: { role: 'CLIENTE' },
  },
  {
    path: 'estabelecimento',
    loadChildren: () =>
      import('./pages/estabelecimento').then((m) => m.estabelecimentoRoutes),
    canActivate: [AuthGuard],
    data: { role: 'ESTABELECIMENTO' },
  },
  {
    path: 'guest',
    loadChildren: () => import('./pages/user').then((m) => m.guestRoutes),
  },
  {
    path: 'administrador',
    loadChildren: () =>
      import('./pages/administrador').then((m) => m.administradorRoutes),
    canActivate: [AuthGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'produto',
    loadChildren: () => import('./pages/produto').then((m) => m.produtoRoutes),
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent }, // Rota pública
  { path: 'administrador/login', component: LoginAdministradorComponent }, // Rota pública
  { path: 'registrar', component: AutoCadastroComponent }, // Rota pública
  { path: 'endereco/novo-endereco', component: NovoEnderecoComponent }, // Rota pública
  { path: 'promocao/nova-promocao', component: NovaPromocaoComponent }, // Rota pública
  { path: '**', component: RedirectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
