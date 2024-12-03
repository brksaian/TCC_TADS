import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdministradorService } from '../../../../services';
import { Produto } from '../../../../shared/interface';
import { CardProdutoComponent } from '../../../produto';

@Component({
  selector: 'app-listar-produtos-sem-imagem',
  standalone: true,
  imports: [CommonModule, CardProdutoComponent, RouterModule, FormsModule],
  templateUrl: './listar-produtos-sem-imagem.component.html',
  styleUrls: ['./listar-produtos-sem-imagem.component.css'],
})
export class ListarProdutosSemImagemComponent implements OnInit {
  @Input() isCarrossel = true; // Define se a exibição será em carrossel
  produtos: Produto[] = [];
  filteredProdutos: Produto[] = [];
  currentSlide = 0; // Slide atual
  itemsPerSlide = 5; // Quantidade de itens por slide
  page = 0; // Página atual para paginação
  size = 10; // Tamanho da página

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
    this.loadProductsWithoutImage();
  }

  // Método para carregar produtos sem imagem
  loadProductsWithoutImage(): void {
    this.administradorService
      .getProductsWithoutImage(this.page, this.size)
      .subscribe({
        next: (response) => {
          this.filteredProdutos = response.content;
          console.log('Produtos sem imagem:', this.filteredProdutos);
        },
        error: (error) => {
          console.error('Erro ao carregar produtos sem imagem:', error);
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
