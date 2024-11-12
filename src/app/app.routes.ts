import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCadastroComponent, LoginComponent } from './pages/user';
//Integrado 12/11//
import { PromocoesEstabelecimentoComponent } from './components/estabelecimento';
import { EnderecosEstabelecimentoComponent } from './components/estabelecimento'; 
import { NovoEnderecoComponent } from './components/endereco';
import { NovaPromocaoComponent } from './components/promocao';
import {LoginAdministradorComponent} from './components/administrador';
import {HomeAdministradorComponent} from './components/administrador';

export const routes: Routes = [
  {
    path: 'consumidor',
    loadChildren: () => import('./pages/consumidor').then(m => m.clientRoutes),
  },
  {
    path: 'estabelecimento',
    loadChildren: () => import('./pages/estabelecimento').then(m => m.estabelecimentoRoutes),
  },
  {
    path: 'guest',
    loadChildren: () => import('./pages/user').then(m => m.guestRoutes),
  },
  {path: 'login', component: LoginComponent },
  {path: 'registrar', component: AutoCadastroComponent },
  { path: '**', redirectTo: '/guest/home' },
  //Integrado 12/11//
  { path: 'estabelecimento/promocoes-estabelecimento', component: PromocoesEstabelecimentoComponent }, 
  { path: 'estabelecimento/enderecos-estabelecimento', component: EnderecosEstabelecimentoComponent },
  { path: 'endereco/novo-endereco', component: NovoEnderecoComponent },
  { path: 'promocao/nova-promocao', component: NovaPromocaoComponent },
  { path: 'administrador/login-administrador', component: LoginAdministradorComponent },
  { path: 'administrador/home-administrador', component: HomeAdministradorComponent }
  //{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // outras rotas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
