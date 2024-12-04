import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { Produto } from '../../../../shared/interface';
import { CardProdutoComponent } from '../../../produto';
import { ProdutoService } from '../../../../services';

@Component({
  selector: 'app-home-produtos-adm',
  standalone: true,
  imports: [
    CommonModule,
    CardProdutoComponent,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './home-produtos-adm.component.html',
  styleUrls: ['./home-produtos-adm.component.css'],
})
export class HomeProdutosADMComponent implements OnInit {
  produtos: Produto[] = [];
  searchQuery: string = '';
  sortOption: string = 'A-Z';
  filteredProdutos: Produto[] = [];

  faMagnifyingGlass = faMagnifyingGlass;
  faChevronDown = faChevronDown;

  constructor(private router: Router, private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos(); // Chama o método para carregar os produtos
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe({
      next: (response) => {
        this.produtos = response.content || []; // Supondo que os produtos estão na propriedade 'content'
        this.filteredProdutos = [...this.produtos];
        this.applyFilteringAndSorting();
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
      },
    });
  }

  onSearch(): void {
    this.applyFilteringAndSorting();
  }

  onSortChange(): void {
    this.applyFilteringAndSorting();
  }

  private applyFilteringAndSorting(): void {
    this.filteredProdutos = this.produtos.filter(
      (produto) =>
        produto.category !== undefined &&
        produto?.image?.trim() !== '' &&
        produto.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    this.filteredProdutos.sort((a, b) =>
      this.sortOption === 'A-Z'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  }

  produtosSemCategoria() {
    this.router.navigate(['administrador/produto/sem-categoria']);
  }

  produtosSemImagem() {
    this.router.navigate(['administrador/produto/sem-imagem']);
  }
}
