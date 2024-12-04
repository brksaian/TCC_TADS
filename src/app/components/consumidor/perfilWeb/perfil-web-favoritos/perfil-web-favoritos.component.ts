import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../../../../shared/interface';

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
      id: '1',
      name: 'Pão Forma Seven Boys',
      code: '001',
      category: '1',
      image: 'assets/pao-forma.png',
      price: 5.99,
      unit: 'UND',
      storeId: 'store001',
    },
    {
      id: '2',
      name: 'Leite Integral',
      code: '002',
      category: '2',
      image: 'assets/leite-integral.png',
      price: 4.5,
      unit: 'LITRO',
      storeId: 'store002',
    },
    {
      id: '3',
      name: 'Café Torrado',
      code: '003',
      category: '3',
      image: 'assets/cafe-torrado.png',
      price: 10.9,
      unit: 'KG',
      storeId: 'store003',
    },
    {
      id: '4',
      name: 'Biscoito Cream Cracker',
      code: '004',
      category: '4',
      image: 'assets/biscoito-cream-cracker.png',
      price: 3.99,
      unit: 'PACOTE',
      storeId: 'store004',
    },
    {
      id: '5',
      name: 'Refrigerante Cola',
      code: '005',
      category: '5',
      image: 'assets/refrigerante-cola.png',
      price: 6.5,
      unit: 'LITRO',
      storeId: 'store005',
    },
    {
      id: '6',
      name: 'Arroz Tipo 1',
      code: '006',
      category: '6',
      image: 'assets/arroz-tipo1.png',
      price: 20.0,
      unit: 'KG',
      storeId: 'store006',
    },
  ];

  removerFavorito(id: string): void {
    this.produtos = this.produtos.filter((produto) => produto.id !== id);
  }
}
