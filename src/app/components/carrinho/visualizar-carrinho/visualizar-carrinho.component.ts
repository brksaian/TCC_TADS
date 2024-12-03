import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../../../shared/interface';
import { FormsModule } from '@angular/forms';

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
      id: 1,
      name: 'Pão Forma Seven Boys',
      descricao: 'Pão de forma clássico e macio',
      image: 'https://via.placeholder.com/100',
      categoria: 1,
      created_at: '2024-11-01',
      updated_at: '2024-11-01',
    },
    {
      id: 2,
      name: 'Leite Integral',
      descricao: 'Leite integral pasteurizado',
      image: 'https://via.placeholder.com/100',
      categoria: 2,
      created_at: '2024-11-02',
      updated_at: '2024-11-02',
    },
  ];

  cep: string = '';
  total: number = this.produtos.length; // Substitua pelo cálculo de preços, se necessário.

  removerProduto(id: number): void {
    this.produtos = this.produtos.filter((produto) => produto.id !== id);
    this.total = this.produtos.length;
  }

  calcularDistancia(): void {
    console.log(`Calculando distância para o CEP: ${this.cep}`);
    // Lógica para calcular distância com base no CEP
  }
}
