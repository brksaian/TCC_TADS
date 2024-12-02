import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export interface PerfilWebHeaderTab {
  name: string;
  redirectUrl: string;
}

@Component({
  selector: 'app-header-perfil-consumidor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-perfil-consumidor.component.html',
  styleUrls: ['./header-perfil-consumidor.component.css'],
})
export class HeaderPerfilConsumidorComponent implements OnInit {
  usuarioLogado = {
    id: 1,
    nome: 'Jose Maria',
    email: 'jose.maria@example.com',
  };

  notasCadastradas: number = 30;
  produtosCadastrados: number = 55;
  avaliacoes: number = 50;
  seguindo: number = 50;
  seguidores: number = 50;

  tabs: PerfilWebHeaderTab[] = [
    { name: 'Avaliações', redirectUrl: 'avaliacoes' },
    { name: 'Seguindo', redirectUrl: 'seguindo' },
    { name: 'Seguidores', redirectUrl: 'seguidores' },
  ];

  activeTab: string = '';

  ngOnInit(): void {
    // Define a aba ativa inicial
    this.activeTab = this.tabs[0].redirectUrl.toLowerCase();
  }

  selectTab(tab: string): void {
    this.activeTab = tab;
    console.log(`Aba selecionada: ${tab}`);
  }

  seguir(): void {
    console.log(
      `Agora você está seguindo o usuário: ${this.usuarioLogado.nome}`
    );
  }
}
