import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarProdutoComponent } from './components/produto';
import { AutoCadastroComponent, HomeComponent, LoginComponent } from './components/user';
import { PromocoesEstabelecimentoComponent } from './components/estabelecimento';
import { EnderecosEstabelecimentoComponent } from './components/estabelecimento'; 
import { NovoEnderecoComponent } from './components/endereco';
import { NovaPromocaoComponent } from './components/promocao';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registrar', component: AutoCadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'buscarProdutos', component: BuscarProdutoComponent },
  { path: 'estabelecimento/promocoes-estabelecimento', component: PromocoesEstabelecimentoComponent }, 
  { path: 'estabelecimento/enderecos-estabelecimento', component: EnderecosEstabelecimentoComponent },
  { path: 'endereco/novo-endereco', component: NovoEnderecoComponent },
  { path: 'promocao/nova-promocao', component: NovaPromocaoComponent }

  //{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // outras rotas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
