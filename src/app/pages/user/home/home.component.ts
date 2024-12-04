import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarrosselCategoriasComponent } from '../../../components/categoria/carrossel-categorias';
import { CarrosselProdutosComponent } from '../../../components/produto';
import { HeaderHomeComponent } from '../../../components/user';
import { CategoriaService, ProdutoService } from '../../../services';
import { Categoria, Produto } from '../../../shared/interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarrosselProdutosComponent,
    CarrosselCategoriasComponent,
    CommonModule,
    HeaderHomeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  produtos: Produto[] = [];

  categorias: Categoria[] = [];

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(
      (response) => {
        // this.produtos = respoonse.content;
        this.produtos = response.content;
      },
      (error) => {
        console.error('Erro ao carregar os produtos:', error);
      }
    );

    this.categoriaService.getCategorias().subscribe(
      (response) => {
        console.log(response.content);
        this.categorias = response.content;
      },
      (error) => {
        console.error('Erro ao carregar os categorias:', error);
      }
    );
  }
}
