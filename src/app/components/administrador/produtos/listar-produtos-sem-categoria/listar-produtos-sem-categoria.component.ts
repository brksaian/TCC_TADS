import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class ListarProdutosSemCategoriaComponent implements OnInit {
  produtos: Produto[] = [];
  filteredProdutos: Produto[] = [];
  currentSlide = 0; // Slide atual
  itemsPerSlide = 5; // Quantidade de itens por slide

  ngOnInit(): void {
    const produtoTeste = new ProdutoTesteComponent();
    this.produtos = produtoTeste.getProdutos();

    // Filtra apenas os produtos que não têm categoria
    this.filteredProdutos = this.produtos.filter(
      (produto) => produto.categoria === undefined
    );
  }

  prevSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  nextSlide(): void {
    const maxSlide =
      Math.ceil(this.filteredProdutos.length / this.itemsPerSlide) - 1;
    if (this.currentSlide < maxSlide) {
      this.currentSlide++;
    }
  }
}
