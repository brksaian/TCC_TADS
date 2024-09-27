import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../../../shared/interface';
import { Categoria } from '../../../shared/interface';
import { CarrosselProdutosComponent } from '../../produto';
import { CarrosselCategoriasComponent } from '../../categoria/carrossel-categorias';
import { HeaderHomeComponent } from "../header-home/header-home.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrosselProdutosComponent, CarrosselCategoriasComponent, CommonModule, HeaderHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  produtos: Produto[] = [
    {
      nome: 'Arroz Integral Tio João 500g',
      precoMedio: 7.49,
      imagem: 'assets/images/products/arroz_tio_joao_500g.webp'
    },
    {
      nome: 'Feijão Carioca Camil',
      precoMedio: 5.29,
      imagem: 'https://www.paodeacucar.com/img/uploads/1/492/554492.png'
    },
    {
      nome: 'Azeite de Oliva Gallo Extra Virgem',
      precoMedio: 24.99,
      imagem: 'https://www.paodeacucar.com/img/uploads/1/13/630013.png'
    },
    {
      nome: 'Macarrão Penne Barilla',
      precoMedio: 7.89,
      imagem: 'https://www.paodeacucar.com/img/uploads/1/628/518628.png'
    },
    {
      nome: 'Farinha de Trigo Dona Benta',
      precoMedio: 3.99,
      imagem: 'https://www.paodeacucar.com/img/uploads/1/473/605473.png'
    },
    {
      nome: 'Leite Longa Vida Parmalat',
      precoMedio: 4.59,
      imagem: 'https://www.paodeacucar.com/img/uploads/1/617/554617.png'
    },
    {
      nome: 'Manteiga Aviação com Sal',
      precoMedio: 15.99,
      imagem: 'https://www.paodeacucar.com/img/uploads/1/30/607030.png'
    },
    {
      nome: 'Café Pilão Torrado e Moído',
      precoMedio: 9.99,
      imagem: 'https://www.paodeacucar.com/img/uploads/1/205/607205.png'
    },
    {
      nome: 'Açúcar Refinado União',
      precoMedio: 2.99,
      imagem: 'https://www.paodeacucar.com/img/uploads/1/578/630578.png'
    },
    {
      nome: 'Detergente Líquido Ypê',
      precoMedio: 1.99,
      imagem: 'https://www.paodeacucar.com/img/uploads/1/135/630135.png'
    },
    {
      nome: 'Sabão em Pó Omo Lavagem Perfeita',
      precoMedio: 10.99,
      imagem: 'https://www.paodeacucar.com/img/uploads/1/138/607138.png'
    },
    {
      nome: 'Papel Higiênico Neve 30 Metros',
      precoMedio: 12.99,
      imagem: 'https://www.paodeacucar.com/img/uploads/1/215/607215.png'
    }
  ];

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
}