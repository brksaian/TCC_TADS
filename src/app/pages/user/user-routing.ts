import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { UserLayoutComponent } from './user-layout/user-layout.component';

export const guestRoutes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: 'home', component:  HomeComponent},
      //{ path: 'login', component:  LoginComponent},
      //{ path: 'registrar', component: AutoCadastroComponent},
      // { path: 'reserva/:codigoReserva', component: ReservationComponent },
      // { path: 'flight-booking', component: FlightBookingComponent},
      // { path: 'cancel-reservation', component:  CancelReservationComponent},
      // { path: 'checkin', component:  CheckinComponent},
      //{ path: '**', redirectTo: 'login' }
    ]
  }
];