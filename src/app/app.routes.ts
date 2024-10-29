import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  { path: '**', redirectTo: '/guest/home' },
  //{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // outras rotas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
