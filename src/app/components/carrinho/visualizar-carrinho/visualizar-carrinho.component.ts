import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../../shared/interface';

@Component({
  selector: 'app-visualizar-carrinho',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './visualizar-carrinho.component.html',
  styleUrl: './visualizar-carrinho.component.css',
})
export class VisualizarCarrinhoComponent {
  produtos: Produto[] = [
    {
      id: '1',
      name: 'Pão Forma Seven Boys',
      code: '001',
      category: '1',
      image: 'https://via.placeholder.com/100',
      price: 5.99,
      unit: 'UND',
      storeId: 'store001',
    },
    {
      id: '2',
      name: 'Leite Integral',
      code: '002',
      category: '2',
      image: 'https://via.placeholder.com/100',
      price: 4.5,
      unit: 'LITRO',
      storeId: 'store002',
    },
  ];

  cep: string = '';
  total: number = this.produtos.length; // Substitua pelo cálculo de preços, se necessário.

  removerProduto(id: string): void {
    this.produtos = this.produtos.filter((produto) => produto.id !== id);
    this.total = this.produtos.length;
  }

  calcularDistancia(): void {
    console.log(`Calculando distância para o CEP: ${this.cep}`);
    // Lógica para calcular distância com base no CEP
  }
}
