import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../shared/interface';
import { Categoria } from '../../../shared/interface';
import { CarrosselProdutosComponent } from '../../produto';
import { CarrosselCategoriasComponent } from '../../categoria/carrossel-categorias';
import { HeaderHomeComponent } from "../header-home/header-home.component";
import { ProdutoService } from '../../../services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrosselProdutosComponent, CarrosselCategoriasComponent, CommonModule, HeaderHomeComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos: Produto[] = [];

    categorias: Categoria[] = [
    {
      nome: 'Alimentos',
      imagem: 'assets/Nota Social.jpg'
    },
    {
      nome: 'Higiene',
      imagem: 'assets/Nota Social.jpg'
    },
    {
      nome: 'Limpeza',
      imagem: 'assets/Nota Social.jpg'
    },
    {
      nome: 'Bebidas',
      imagem: 'assets/Nota Social.jpg'
    },
    {
      nome: 'Carnes',
      imagem: 'assets/Nota Social.jpg'
    },
    {
      nome: 'Frios e Laticínios',
      imagem: 'assets/Nota Social.jpg'
    },
    {
      nome: 'Hortifruti',
      imagem: 'assets/images/categorias/hortifruti.jpg'
    },
    {
      nome: 'Padaria e Confeitaria',
      imagem: 'assets/Nota Social.jpg'
    },
    {
      nome: 'Bebê',
      imagem: 'assets/Nota Social.jpg'
    },
    {
      nome: 'Petshop',
      imagem: 'assets/Nota Social.jpg'
    },
    {
      nome: 'Saúde e Beleza',
      imagem: 'assets/Nota Social.jpg'
    },
    {
      nome: 'Papelaria',
      imagem: 'assets/Nota Social.jpg'
    },
    {
      nome: 'Eletrônicos',
      imagem: 'assets/Nota Social.jpg'
    },
    {
      nome: 'Utilidades Domésticas',
      imagem: 'assets/Nota Social.jpg'
    },
    {
      nome: 'Automotivo',
      imagem: 'assets/Nota Social.jpg'
    },
    {
      nome: 'Brinquedos',
      imagem: 'assets/Nota Social.jpg'
    }
  ];
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
