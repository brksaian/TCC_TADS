import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { HeaderAdministradorComponent } from '../../header-administrador/header-administrador.component';
import { CardProdutoComponent } from '../../../produto/card-produto/card-produto.component';
import { Produto } from '../../../../shared/interface';
import { ProdutoTesteComponent } from '../produto-teste/produto-teste.component';

@Component({
  selector: 'app-home-produtos-adm',
  standalone: true,
  imports: [CommonModule, CardProdutoComponent,HeaderAdministradorComponent, RouterModule, FormsModule,ProdutoTesteComponent],
  templateUrl: './home-produtos-adm.component.html',
  styleUrls: ['./home-produtos-adm.component.css']
})
export class HomeProdutosADMComponent implements OnInit{ 
  produtos: Produto[] = []; 
  searchQuery: string = ''; 
  sortOption: string = 'A-Z'; 
  filteredProdutos: Produto[] = [];

  
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Instancia para ProdutoTesteComponent para acessar os dados
    const produtoTeste = new ProdutoTesteComponent();
    this.produtos = produtoTeste.getProdutos();

    // Filtra produtos válidos
    this.filteredProdutos = this.produtos.filter(
      produto => produto.categoria !== undefined && produto.image.trim() !== ''
    );
  }

  onSearch(): void {
    this.filteredProdutos = this.produtos
      .filter(
        produto =>
          produto.categoria !== undefined &&
          produto.image.trim() !== '' &&
          produto.nome.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    this.applySorting();
  }

  onSortChange(): void {
    this.applySorting();
  }

  private applySorting(): void {
    this.filteredProdutos.sort((a, b) =>
      this.sortOption === 'A-Z'
        ? a.nome.localeCompare(b.nome)
        : b.nome.localeCompare(a.nome)
    );
  }

  produtosSemCategoria() {
    this.router.navigate(['administrador/produtos/produtos-sem-categoria-adm']);
  }

  produtosSemImagem() {
    this.router.navigate(['administrador/produtos/produtos-sem-imagem-adm']);
  }
}