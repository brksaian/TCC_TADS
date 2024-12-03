import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { AuthService, ProdutoService } from '../../../services';
import { Produto } from '../../../shared/interface';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css'],
})
export class CardProdutoComponent implements OnInit {
  @Input() produto!: Produto;
  precoMedio: number | null = null;
  isCliente: boolean = false; // Flag para verificar se o usuário é cliente

  faCartPlus = faCartPlus;

  constructor(
    private produtoService: ProdutoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Verifica se o usuário é cliente
    this.isCliente = this.authService.getUserRole() === 'CLIENTE';

    // Busca o preço médio do produto
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
