import { Routes } from '@angular/router';
import { BuscarProdutoComponent } from './buscar-produto';
import { ConsumidorLayoutComponent } from '../consumidor/consumidor-layout';
import { VisualizarProdutoComponent } from '../consumidor/visualizar-produto';

export const produtoRoutes: Routes = [
  {
    path: '',
    component: ConsumidorLayoutComponent,
    children: [
      { path: 'buscar', component: BuscarProdutoComponent },
      { path: 'visualizar', component: VisualizarProdutoComponent },
      // { path: 'mileage-purchase', component:  MilesPurchaseComponent},
      // { path: 'miles-details', component: MilesDetailsComponent},
      // { path: 'flight-booking', component: FlightBookingComponent},
      // { path: 'cancel-reservation', component:  CancelReservationComponent},
      // { path: 'checkin', component:  CheckinComponent},
      // { path: '**', redirectTo: 'home' },
    ],
  },
];
