import { Routes } from '@angular/router';
import {
  PerfilWebContaComponent,
  PerfilWebFavoritosComponent,
  PerfilWebNotasComponent,
  PerfilWebNotificacoesComponent,
  PerfilWebSeguidoresComponent,
  PerfilWebSeguindoComponent,
} from '../../../components/consumidor';
import { AvaliacoesuserComponent } from '../../../components/consumidor/avaliacoesuser/avaliacoesuser.component';

export const perfilWebRoutes: Routes = [
  {
    path: '',
    component: PerfilWebFavoritosComponent,
  },
  {
    path: 'favoritos',
    component: PerfilWebFavoritosComponent,
  },
  {
    path: 'notas',
    component: PerfilWebNotasComponent,
  },
  {
    path: 'seguindo',
    component: PerfilWebSeguindoComponent,
  },
  {
    path: 'seguidores',
    component: PerfilWebSeguidoresComponent,
  },
  {
    path: 'notificacoes',
    component: PerfilWebNotificacoesComponent,
  },
  {
    path: 'conta',
    component: PerfilWebContaComponent,
  },
  {
    path: 'avaliacoes',
    component: AvaliacoesuserComponent,
  },
];
