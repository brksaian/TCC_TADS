import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Consumidor {
  id: string;
  nome: string;
  notesCount: number;
  productsCount: number;
  rank: number;
  profileUrl: string;
  imagem: string;
  pontos: number;
}

@Component({
  selector: 'app-perfil-web-seguindo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-web-seguindo.component.html',
  styleUrls: ['./perfil-web-seguindo.component.css'],
})
export class PerfilWebSeguindoComponent {
  consumidores: Consumidor[] = [
    {
      id: '1',
      nome: 'Maria Jose',
      notesCount: 12,
      productsCount: 3,
      rank: 5,
      profileUrl: '/perfil/1',
      imagem: 'https://via.placeholder.com/150',
      pontos: 1234,
    },
    {
      id: '2',
      nome: 'João da Silva',
      notesCount: 8,
      productsCount: 2,
      rank: 10,
      profileUrl: '/perfil/2',
      imagem: 'https://via.placeholder.com/150',
      pontos: 980,
    },
    // Adicione mais consumidores conforme necessário
  ];

  consumidoresFiltrados: Consumidor[] = [...this.consumidores];

  buscarConsumidor(nome: string): void {
    nome = nome.toLowerCase();
    this.consumidoresFiltrados = this.consumidores.filter((consumidor) =>
      consumidor.nome.toLowerCase().includes(nome)
    );
  }

  ordenarConsumidores(criterio: string): void {
    if (criterio === 'pontos') {
      this.consumidoresFiltrados.sort((a, b) => b.pontos - a.pontos);
    } else if (criterio === 'rank') {
      this.consumidoresFiltrados.sort((a, b) => a.rank - b.rank);
    }
  }

  removerConsumidor(id: string): void {
    this.consumidoresFiltrados = this.consumidoresFiltrados.filter(
      (consumidor) => consumidor.id !== id
    );
  }
}
