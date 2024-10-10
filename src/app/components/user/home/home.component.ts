import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../../services';
import { Categoria, Produto } from '../../../shared/interface';
import { CarrosselCategoriasComponent } from '../../categoria/carrossel-categorias';
import { CarrosselProdutosComponent } from '../../produto';
import { HeaderHomeComponent } from "../header-home/header-home.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrosselProdutosComponent, CarrosselCategoriasComponent, CommonModule, HeaderHomeComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos: Produto[] = [];

    categorias: Categoria[] = [];
  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
      },
      (error) => {
        console.error('Erro ao carregar os produtos:', error);
      }
    );
  }
}
