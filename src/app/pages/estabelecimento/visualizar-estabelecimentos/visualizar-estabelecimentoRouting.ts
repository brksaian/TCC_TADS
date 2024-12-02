import { Routes } from '@angular/router';
import {
  EnderecosEstabelecimentoComponent,
  PromocoesEstabelecimentoComponent,
} from '../../../components/estabelecimento/visualizar-estabelecimentos';
import { VisualizarEstabelecimentoLayoutComponent } from './visualizar-estabelecimento-layout';

export const visualizarestabelecimentosRoutes: Routes = [
  {
    path: '',
    component: VisualizarEstabelecimentoLayoutComponent,
    children: [
      { path: '', component: PromocoesEstabelecimentoComponent },
      { path: 'promocoes', component: PromocoesEstabelecimentoComponent },
      { path: 'enderecos', component: EnderecosEstabelecimentoComponent },
      // { path: 'mileage-purchase', component:  MilesPurchaseComponent},
      // { path: 'miles-details', component: MilesDetailsComponent},
      // { path: 'flight-booking', component: FlightBookingComponent},
      // { path: 'cancel-reservation', component:  CancelReservationComponent},
      // { path: 'checkin', component:  CheckinComponent},
      // { path: '**', redirectTo: 'home' },
    ],
  },
];
