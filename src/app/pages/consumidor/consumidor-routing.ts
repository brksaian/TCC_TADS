import { Routes } from '@angular/router';
import { VisualizarCarrinhoComponent } from '../../components/carrinho';
import { ConsumidorLayoutComponent } from './consumidor-layout';
import { PerfilWebComponent, perfilWebRoutes } from './perfil-web';

export const clientRoutes: Routes = [
  {
    path: '',
    component: ConsumidorLayoutComponent,
    children: [
      {
        path: 'perfil',
        component: PerfilWebComponent,
        children: perfilWebRoutes,
      },
      { path: 'visualizar-carrinho', component: VisualizarCarrinhoComponent },
      // { path: 'miles-details', component: MilesDetailsComponent},
      // { path: 'flight-booking', component: FlightBookingComponent},
      // { path: 'cancel-reservation', component:  CancelReservationComponent},
      // { path: 'checkin', component:  CheckinComponent},
      // { path: '**', redirectTo: 'home' },
    ],
  },
];
