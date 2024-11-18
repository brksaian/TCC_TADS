import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PerfilWebHeaderComponent, PerfilWebMenuComponent } from '../../../components/consumidor';

@Component({
  selector: 'app-perfil-web',
  standalone: true,
  imports: [
    PerfilWebMenuComponent,
    PerfilWebHeaderComponent,
    RouterModule,
    CommonModule,
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

  usuarioLogado = true;

  onTabChange(tab: string) {
    console.log(`Aba selecionada: ${tab}`);
  }
}
