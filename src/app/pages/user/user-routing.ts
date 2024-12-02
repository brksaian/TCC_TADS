import { Routes } from '@angular/router';
import { RankingConsumidorComponent } from '../consumidor/ranking-consumidor/ranking-consumidor.component';
import { BuscarProdutoComponent } from '../produto/buscar-produto';
import { HomeComponent } from './home';
import { UserLayoutComponent } from './user-layout/user-layout.component';

export const guestRoutes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'ranking-users', component: RankingConsumidorComponent },
      { path: 'buscar-produtos', component: BuscarProdutoComponent },
      //{ path: 'registrar', component: AutoCadastroComponent},
      // { path: 'reserva/:codigoReserva', component: ReservationComponent },
      // { path: 'flight-booking', component: FlightBookingComponent},
      // { path: 'cancel-reservation', component:  CancelReservationComponent},
      // { path: 'checkin', component:  CheckinComponent},
      //{ path: '**', redirectTo: 'login' }
    ],
  },
];
