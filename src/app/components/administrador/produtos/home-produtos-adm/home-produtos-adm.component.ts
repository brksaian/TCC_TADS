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
import { CardProdutoComponent } from '../../../produto/card-produto/card-produto.component';
import { ProdutoTesteComponent } from '../produto-teste/produto-teste.component';

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

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Instancia para ProdutoTesteComponent para acessar os dados
    const produtoTeste = new ProdutoTesteComponent();
    this.produtos = produtoTeste.getProdutos();

    // Filtra produtos válidos
    this.filteredProdutos = this.produtos.filter(
      (produto) =>
        produto.categoria !== undefined && produto.image.trim() !== ''
    );
  }

  onSearch(): void {
    this.filteredProdutos = this.produtos.filter(
      (produto) =>
        produto.categoria !== undefined &&
        produto.image.trim() !== '' &&
        produto.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.applySorting();
  }

  onSortChange(): void {
    this.applySorting();
  }

  private applySorting(): void {
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
