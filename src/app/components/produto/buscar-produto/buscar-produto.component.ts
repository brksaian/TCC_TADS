import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProdutoService } from '../../../services';
import { CardProdutoComponent } from '../card-produto';

@Component({
  selector: 'app-buscar-produto',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule, CardProdutoComponent],
  templateUrl: './buscar-produto.component.html',
  styleUrl: './buscar-produto.component.css'
})
export class BuscarProdutoComponent implements OnInit {
  produtos: any[] = [];
  categorias = [
    { name: 'Feira', count: 50 },
    { name: 'Bebidas', count: 40 },
    { name: 'Carnes', count: 20 },
    { name: 'Padaria', count: 30 },
    { name: 'Higiene', count: 25 }
  ];

  selectedCategory: string = '';
  searchQuery: string = '';
  sortOption: string = 'A-Z';
  isLoading: boolean = false;

  constructor(private productService: ProdutoService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.isLoading = true;
    const queryParams = {
      category: this.selectedCategory || '',
      search: this.searchQuery || '',
      sort: this.sortOption || 'A-Z',
    };

    this.productService.getProducts(queryParams).subscribe(
      (data) => {
        this.produtos = data.products;
        this.isLoading = false;
      },
      (error) => {
        console.error('Erro ao buscar produtos:', error);
        this.isLoading = false;
      }
    );
  }

  onCategoryChange(category: any): void {
    this.selectedCategory = category.name;
    this.fetchProducts();
  }

  onSortChange(sortOption: string): void {
    this.sortOption = sortOption;
    this.fetchProducts();
  }

  onSearch(): void {
    this.fetchProducts();
  }
}
