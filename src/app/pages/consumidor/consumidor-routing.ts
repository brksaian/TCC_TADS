import { Routes } from '@angular/router';
import { BuscarProdutoComponent } from '../produto/buscar-produto';
import { ConsumidorLayoutComponent } from './consumidor-layout';
import { PerfilWebComponent, perfilWebRoutes } from './perfil-web';
import { VisualizarProdutoComponent } from './visualizar-produto';

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
      { path: 'visualizar-produto', component: VisualizarProdutoComponent },
      // { path: 'mileage-purchase', component:  MilesPurchaseComponent},
      // { path: 'miles-details', component: MilesDetailsComponent},
      // { path: 'flight-booking', component: FlightBookingComponent},
      // { path: 'cancel-reservation', component:  CancelReservationComponent},
      // { path: 'checkin', component:  CheckinComponent},
      // { path: '**', redirectTo: 'home' },
    ],
  },
];
