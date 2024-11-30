import { Component } from '@angular/core';
import { Produto } from '../../../../shared/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil-web-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-web-favoritos.component.html',
  styleUrls: ['./perfil-web-favoritos.component.css'],
})
export class PerfilWebFavoritosComponent {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Pão Forma Seven Boys',
      descricao: 'Pão forma macio e saboroso.',
      image: 'assets/pao-forma.png',
      categoria: 1,
      created_at: '2024-01-01T10:00:00Z',
      updated_at: '2024-01-02T15:00:00Z',
    },
    {
      id: 2,
      nome: 'Leite Integral',
      descricao: 'Leite integral de alta qualidade.',
      image: 'assets/leite-integral.png',
      categoria: 2,
      created_at: '2024-01-03T08:00:00Z',
      updated_at: '2024-01-03T10:00:00Z',
    },
    {
      id: 3,
      nome: 'Café Torrado',
      descricao: 'Café torrado e moído para o dia a dia.',
      image: 'assets/cafe-torrado.png',
      categoria: 3,
      created_at: '2024-01-05T09:00:00Z',
      updated_at: '2024-01-06T13:00:00Z',
    },
    {
      id: 4,
      nome: 'Biscoito Cream Cracker',
      descricao: 'Biscoito leve e crocante.',
      image: 'assets/biscoito-cream-cracker.png',
      categoria: 4,
      created_at: '2024-01-08T11:00:00Z',
      updated_at: '2024-01-09T12:00:00Z',
    },
    {
      id: 5,
      nome: 'Refrigerante Cola',
      descricao: 'Refrigerante cola sabor clássico.',
      image: 'assets/refrigerante-cola.png',
      categoria: 5,
      created_at: '2024-01-10T14:00:00Z',
      updated_at: '2024-01-11T16:00:00Z',
    },
    {
      id: 6,
      nome: 'Arroz Tipo 1',
      descricao: 'Arroz tipo 1, grãos selecionados.',
      image: 'assets/arroz-tipo1.png',
      categoria: 6,
      created_at: '2024-01-12T07:00:00Z',
      updated_at: '2024-01-12T10:00:00Z',
    },
  ];

  removerFavorito(id: number): void {
    this.produtos = this.produtos.filter((produto) => produto.id !== id);
  }
}
