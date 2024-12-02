import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Produto } from '../../../../shared/interface';
import { CardProdutoComponent } from '../../../produto/card-produto/card-produto.component';
import { ProdutoTesteComponent } from '../produto-teste/produto-teste.component';

@Component({
  selector: 'app-listar-produtos-sem-categoria',
  standalone: true,
  imports: [CommonModule, CardProdutoComponent, RouterModule, FormsModule],
  templateUrl: './listar-produtos-sem-categoria.component.html',
  styleUrls: ['./listar-produtos-sem-categoria.component.css'],
})
export class ListarProdutosSemCategoriaComponent {
  produtos: Produto[] = [];
  filteredProdutos: Produto[] = [];

  ngOnInit(): void {
    // Instancia para ProdutoTesteComponent para acessar os dados
    const produtoTeste = new ProdutoTesteComponent();
    this.produtos = produtoTeste.getProdutos();

    // Filtra apenas os produtos que não têm imagem
    this.filteredProdutos = this.produtos.filter(
      (produto) => produto.categoria === undefined
    );
  }
}
