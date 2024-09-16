import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Produto } from '../../../shared/interface';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent {
    @Input() produto!: Produto;

    adicionarAoCarrinho(produto: Produto) {
      // lógica para adicionar ao carrinho
      console.log('Produto adicionado ao carrinho:', produto);
    }

    adicionarAosFavoritos(produto: Produto) {
      // lógica para adicionar aos favoritos
      console.log('Produto adicionado aos favoritos:', produto);
    }
  }
