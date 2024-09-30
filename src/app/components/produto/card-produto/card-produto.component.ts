import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ProdutoService } from '../../../services';
import { Produto } from '../../../shared/interface';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {
  @Input() produto!: Produto;
  precoMedio: number | null = null;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.getPrecoMedioProduto(this.produto.id).subscribe(
      (precoMedio) => {
        this.precoMedio = precoMedio;
      },
      (error) => {
        console.error('Erro ao buscar preço médio:', error);
        this.precoMedio = null;
      }
    );
  }

  adicionarAoCarrinho(produto: Produto) {
    console.log('Produto adicionado ao carrinho:', produto);
  }

  adicionarAosFavoritos(produto: Produto) {
    console.log('Produto adicionado aos favoritos:', produto);
  }
}
