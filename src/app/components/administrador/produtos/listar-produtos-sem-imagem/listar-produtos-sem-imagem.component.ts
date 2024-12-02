import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Produto } from '../../../../shared/interface';
import { CardProdutoComponent } from '../../../produto';
import { ProdutoTesteComponent } from '../produto-teste';

@Component({
  selector: 'app-listar-produtos-sem-imagem',
  standalone: true,
  imports: [CommonModule, CardProdutoComponent, RouterModule, FormsModule],
  templateUrl: './listar-produtos-sem-imagem.component.html',
  styleUrls: ['./listar-produtos-sem-imagem.component.css'],
})
export class ListarProdutosSemImagemComponent implements OnInit {
  produtos: Produto[] = [];
  filteredProdutos: Produto[] = [];
  currentSlide = 0;
  itemsPerSlide = 5;

  ngOnInit(): void {
    const produtoTeste = new ProdutoTesteComponent();
    this.produtos = produtoTeste.getProdutos();

    // Filtra apenas os produtos que não têm imagem
    this.filteredProdutos = this.produtos.filter(
      (produto) => produto.image.trim() === ''
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
