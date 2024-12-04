import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Consumidor, getNome } from '../../../../shared/interface';

@Component({
  selector: 'app-perfil-web-seguidores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-web-seguidores.component.html',
  styleUrls: ['./perfil-web-seguidores.component.css'],
})
export class PerfilWebSeguidoresComponent {
  consumidores: Consumidor[] = [
    {
      id: '1',
      firstName: 'Maria',
      lastName: 'Jose',
      notesCount: 12,
      productsCount: 3,
      rank: 5,
      profileUrl: '/perfil/1',
      imagem: 'https://via.placeholder.com/150',
      pontos: 1234,
    },
    {
      id: '2',
      firstName: 'João',
      lastName: 'da Silva',
      notesCount: 8,
      productsCount: 2,
      rank: 10,
      profileUrl: '/perfil/2',
      imagem: 'https://via.placeholder.com/150',
      pontos: 980,
    },
    {
      id: '3',
      firstName: 'Ana',
      lastName: 'Clara',
      notesCount: 15,
      productsCount: 5,
      rank: 3,
      profileUrl: '/perfil/3',
      imagem: 'https://via.placeholder.com/150',
      pontos: 1450,
    },
    {
      id: '4',
      firstName: 'Carlos',
      lastName: 'Alberto',
      notesCount: 6,
      productsCount: 1,
      rank: 15,
      profileUrl: '/perfil/4',
      imagem: 'https://via.placeholder.com/150',
      pontos: 720,
    },
    {
      id: '5',
      firstName: 'Fernanda',
      lastName: 'Souza',
      notesCount: 20,
      productsCount: 7,
      rank: 1,
      profileUrl: '/perfil/5',
      imagem: 'https://via.placeholder.com/150',
      pontos: 2000,
    },
    {
      id: '6',
      firstName: 'Lucas',
      lastName: 'Pereira',
      notesCount: 10,
      productsCount: 4,
      rank: 8,
      profileUrl: '/perfil/6',
      imagem: 'https://via.placeholder.com/150',
      pontos: 1100,
    },
    {
      id: '7',
      firstName: 'Mariana',
      lastName: 'Santos',
      notesCount: 13,
      productsCount: 5,
      rank: 4,
      profileUrl: '/perfil/7',
      imagem: 'https://via.placeholder.com/150',
      pontos: 1350,
    },
  ];

  getNome = getNome;

  consumidoresFiltrados: Consumidor[] = [...this.consumidores];

  buscarConsumidor(nome: string): void {
    nome = nome.toLowerCase();
    this.consumidoresFiltrados = this.consumidores.filter((consumidor) =>
      getNome(consumidor).toLowerCase().includes(nome)
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
