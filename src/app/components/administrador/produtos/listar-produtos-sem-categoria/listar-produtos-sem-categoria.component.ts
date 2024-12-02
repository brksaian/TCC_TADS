import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { CardProdutoComponent } from '../../../produto/card-produto/card-produto.component';
import { Produto } from '../../../../shared/interface';
import { ProdutoTesteComponent } from '../produto-teste/produto-teste.component';

@Component({
  selector: 'app-listar-produtos-sem-categoria',
  standalone: true,
  imports: [CommonModule, CardProdutoComponent, RouterModule, FormsModule,ProdutoTesteComponent],
  templateUrl: './listar-produtos-sem-categoria.component.html',
  styleUrls: ['./listar-produtos-sem-categoria.component.css']
})
export class ListarProdutosSemCategoriaComponent {
  produtos: Produto[] = [];
  filteredProdutos: Produto[] = [];

  ngOnInit(): void {
    // Instancia para ProdutoTesteComponent para acessar os dados
    const produtoTeste = new ProdutoTesteComponent();
    this.produtos = produtoTeste.getProdutos();

    // Filtra apenas os produtos que não têm imagem
    this.filteredProdutos = this.produtos.filter(produto => produto.categoria=== undefined);
  }
} 