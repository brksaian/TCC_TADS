import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCadastroComponent, HomeComponent, LoginComponent } from './components/user';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registrar', component: AutoCadastroComponent },
  { path: 'login', component: LoginComponent },

  //{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // outras rotas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
