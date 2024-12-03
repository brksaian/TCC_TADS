import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Produto } from '../../../../shared/interface';
import { CardProdutoComponent } from '../../../produto/card-produto/card-produto.component';
import { AdministradorService } from '../../../../services';

@Component({
  selector: 'app-listar-produtos-sem-categoria',
  standalone: true,
  imports: [CommonModule, CardProdutoComponent, RouterModule, FormsModule],
  templateUrl: './listar-produtos-sem-categoria.component.html',
  styleUrls: ['./listar-produtos-sem-categoria.component.css'],
})
export class ListarProdutosSemCategoriaComponent implements OnInit {
  @Input() isCarrossel = true; // Define se a exibição será um carrossel
  produtos: Produto[] = [];
  filteredProdutos: Produto[] = [];
  currentSlide = 0; // Slide atual
  itemsPerSlide = 5; // Quantidade de itens por slide
  page = 0; // Página atual para paginação
  size = 10; // Quantidade de itens por página

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
    this.loadProductsWithoutCategory();
  }

  // Método para carregar produtos sem categoria
  loadProductsWithoutCategory(): void {
    this.administradorService
      .getProductsWithoutCategory(this.page, this.size)
      .subscribe({
        next: (response) => {
          this.filteredProdutos = response.content;
          console.log('Produtos sem categoria:', this.filteredProdutos);
        },
        error: (error) => {
          console.error('Erro ao carregar produtos sem categoria:', error);
        },
      });
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
