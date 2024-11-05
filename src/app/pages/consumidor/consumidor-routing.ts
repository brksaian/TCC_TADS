import { Routes } from '@angular/router';
import { ConsumidorLayoutComponent } from './consumidor-layout/consumidor-layout.component';

export const clientRoutes: Routes = [
  {
    path: '',
    component: ConsumidorLayoutComponent,
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
