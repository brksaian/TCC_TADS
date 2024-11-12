import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { HeaderEstabelecimentoComponent } from '../header-estabelecimento';
import { CardPromocaoComponent } from '../../promocao/card-promocao/card-promocao.component';
import { Promocao } from '../../../shared/interface';

@Component({
  selector: 'app-promocoes-estabelecimento',
  standalone: true,
  imports: [CommonModule, HeaderEstabelecimentoComponent, CardPromocaoComponent],
  templateUrl: './promocoes-estabelecimento.component.html',
  styleUrls: ['./promocoes-estabelecimento.component.css']
})
export class PromocoesEstabelecimentoComponent {
  promocoes: Promocao[] = [
    {
      id: 1,
      nome: 'Promoção de Verão',
      validade: new Date(2024, 11, 31),
      produtos: ['Salgadinhos', 'Refrigerantes'],
      precos: [9.99, 14.99], 
      imagem: './assets/menu-provisorio.png',
    },
    {
      id: 2,
      nome: 'Carnes',
      validade: new Date(2024, 9, 15),
      produtos: ['Carne Friboi Kg', 'Peito de Frango Kg'],
      precos: [27.99, 4.99], 
      imagem: './assets/menu-provisorio.png', 
    },
    {
      id: 3,
      nome: 'Promoção de Verduras',
      validade: new Date(2024, 10, 31),
      produtos: ['Alface', 'Tomate', 'Cenoura'],
      precos: [1.99, 3.50, 1.99],
      imagem: './assets/menu-provisorio.png',
    },
    {
      id: 4,
      nome: 'Promoção de Frutas',
      validade: new Date(2024, 10, 15),
      produtos: ['Maçã', 'Banana', 'Laranja'],
      precos: [2.99, 1.50, 3.00],
      imagem: './assets/menu-provisorio.png',
    },
    {
      id: 5,
      nome: 'Promoção de Bebidas',
      validade: new Date(2024, 11, 15),
      produtos: ['Água Mineral 500 ml', 'Refrigerante Cola 2L'],
      precos: [0.99, 5.99],
      imagem: './assets/menu-provisorio.png',
    },
    {
      id: 6,
      nome: 'Promoção de Higiene - Sabonetes',
      validade: new Date(2024, 10, 1),
      produtos: ['Sabonete Líquido', 'Sabonete em Barra'],
      precos: [5.99, 1.49],
      imagem: './assets/menu-provisorio.png',
    },
    {
      id: 7,
      nome: 'Promoção de Higiene - Desodorantes',
      validade: new Date(2024, 9, 30),
      produtos: ['Desodorante Roll-On'],
      precos: [8.50],
      imagem: './assets/menu-provisorio.png',
    },
    {
      id: 8,
      nome: 'Promoção de Limpeza - Detergentes',
      validade: new Date(2024, 10, 20),
      produtos: ['Detergente Líquido', 'Sabão em Pó'],
      precos: [2.99, 7.99],
      imagem: './assets/menu-provisorio.png',
    },
    {
      id: 9,
      nome: 'Promoção de Limpeza - Desinfetantes',
      validade: new Date(2024, 11, 5),
      produtos: ['Desinfetante', 'Álcool em Gel', 'Água Sanitária'],
      precos: [3.99, 6.50, 2.89],
      imagem: './assets/menu-provisorio.png',
    },
    {
      id: 10,
      nome: 'Promoção de Carnes - Peixes',
      validade: new Date(2024, 10, 30),
      produtos: ['Salmão Kg', 'Tilápia KG'],
      precos: [29.99, 19.99],
      imagem: './assets/menu-provisorio.png',
    },
  ];

  constructor(private router: Router) {}

  cadastrarPromocao() {
    this.router.navigate(['promocao/nova-promocao']);
  }
}
