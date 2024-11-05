import { Routes } from '@angular/router';
import { EstabelecimentoLayoutComponent } from './estabelecimento-layout/estabelecimento-layout.component';

export const estabelecimentoRoutes: Routes = [
  {
    path: '',
    component: EstabelecimentoLayoutComponent,
    children: [
      // { path: 'home', component:  HomeClientComponent},
      // { path: 'reserva/:codigoReserva', component: ReservationComponent },
      // { path: 'mileage-purchase', component:  MilesPurchaseComponent},
      // { path: 'miles-details', component: MilesDetailsComponent},
      // { path: 'flight-booking', component: FlightBookingComponent},
      // { path: 'cancel-reservation', component:  CancelReservationComponent},
      // { path: 'checkin', component:  CheckinComponent},
      { path: '**', redirectTo: 'home' }
    ]
  }
];
