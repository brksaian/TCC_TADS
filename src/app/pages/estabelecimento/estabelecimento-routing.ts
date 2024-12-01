import { Routes } from '@angular/router';
import { BuscaEstabelecimentoComponent } from './busca-estabelecimento/busca-estabelecimento.component';
import { EstabelecimentoLayoutComponent } from './estabelecimento-layout/estabelecimento-layout.component';

export const estabelecimentoRoutes: Routes = [
  {
    path: '',
    component: EstabelecimentoLayoutComponent,
    children: [
      {
        path: 'visualizar',
        loadChildren: () =>
          import('./visualizar-estabelecimentos').then(
            (m) => m.visualizarestabelecimentosRoutes
          ),
      },
      { path: 'buscar', component: BuscaEstabelecimentoComponent },
      // { path: 'mileage-purchase', component:  MilesPurchaseComponent},
      // { path: 'miles-details', component: MilesDetailsComponent},
      // { path: 'flight-booking', component: FlightBookingComponent},
      // { path: 'cancel-reservation', component:  CancelReservationComponent},
      // { path: 'checkin', component:  CheckinComponent},
      { path: '**', redirectTo: 'home' },
    ],
  },
];
