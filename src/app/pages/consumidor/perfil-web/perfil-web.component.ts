import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  PerfilWebHeaderComponent,
  PerfilWebMenuComponent,
} from '../../../components/consumidor';
import { HeaderperfilusuariodeslogadoComponent } from '../../../components/consumidor/headerperfilusuariodeslogado/headerperfilusuariodeslogado.component';
import { HeaderPerfilConsumidorComponent } from "../../../components/consumidor/header-perfil-consumidor/header-perfil-consumidor.component";

@Component({
  selector: 'app-perfil-web',
  standalone: true,
  imports: [
    PerfilWebMenuComponent,
    PerfilWebHeaderComponent,
    RouterModule,
    CommonModule,
    HeaderperfilusuariodeslogadoComponent,
    HeaderPerfilConsumidorComponent
],
  templateUrl: './perfil-web.component.html',
  styleUrls: ['./perfil-web.component.css'],
})
export class PerfilWebComponent {
  usuario = {
    nome: 'Jose Maria',
    imagem: 'https://via.placeholder.com/150',
    endereco: 'Rua Exemplo, 123 - Curitiba, PR',
  };

  usuarioLogado = false;

  onTabChange(tab: string) {
    console.log(`Aba selecionada: ${tab}`);
  }
  onSeguirChange(estaSeguindo: boolean): void {
    console.log(`Seguir alterado para: ${estaSeguindo}`);
    // Você pode adicionar lógica adicional aqui, como enviar uma solicitação para o backend.
  }
}
