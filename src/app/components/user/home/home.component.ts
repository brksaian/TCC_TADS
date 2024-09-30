import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../shared/interface';
import { CarrosselProdutosComponent } from '../../produto';
import { HeaderHomeComponent } from "../header-home/header-home.component";
import { ProdutoService } from '../../../services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrosselProdutosComponent, CommonModule, HeaderHomeComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos: Produto[] = [];

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
