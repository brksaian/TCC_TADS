import { Component } from '@angular/core';
import { Produto } from '../../../../shared/interface';

@Component({
  selector: 'app-produto-teste',
  standalone: true,
  imports: [],
  templateUrl: './produto-teste.component.html',
  styleUrl: './produto-teste.component.css'
})
export class ProdutoTesteComponent {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Trigo 1kg',
      descricao: 'Supermercado localizado na Rua das Flores, 123',
      image: 'assets/produtos-adm.png',
      categoria: 1,
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
    {
      id: 2,
      nome: 'Leite Integral 1L',
      descricao: 'Supermercado localizado na Av. Central, 456',
      image: 'assets/produtos-adm.png',
      categoria: 2,
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
    {
      id: 3,
      nome: 'Macarrão Instantâneo',
      descricao: 'Supermercado localizado na Rua da Saúde, 789',
      image: 'assets/produtos-adm.png',
      categoria: 1,
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
    {
      id: 4,
      nome: 'Suco Del Vale',
      descricao: 'Supermercado localizado na Praça das Nações, 101',
      image: 'assets/produtos-adm.png',
      categoria: 3,
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
    {
      id: 5,
      nome: 'Iogurte Nestle 170g',
      descricao: 'Supermercado localizado na Rua da Moda, 202',
      image: 'assets/produtos-adm.png',
      categoria: 2,
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
    {
      id: 6,
      nome: 'Leite 0% Lactose',
      descricao: 'Supermercado localizado na Rua da Moda, 202',
      image: 'assets/produtos-adm.png',
      categoria: undefined,
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
    {
      id: 7,
      nome: 'Trigo Anaconda 5Kg',
      descricao: 'Supermercado localizado na Rua da Moda, 202',
      image: '',
      categoria: undefined,
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
    {
      id: 8,
      nome: 'Leite Semidesnatado 1L',
      descricao: 'Supermercado localizado na Rua da Moda, 202',
      image: 'assets/produtos-adm.png',
      categoria: 2,
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
    {
      id: 9,
      nome: 'Carne Friboi Kg',
      descricao: 'Supermercado localizado na Rua da Moda, 202',
      image: 'assets/produtos-adm.png',
      categoria: undefined,
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
    {
      id: 10,
      nome: 'Nestle Ninho 540g',
      descricao: 'Supermercado localizado na Rua da Moda, 202',
      image: '',
      categoria: 2,
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
    {
      id: 101,
      nome: 'Nestle Ninho 540g',
      descricao: 'Supermercado localizado na Rua da Moda, 202',
      image: '',
      categoria: 2,
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
    {
      id: 102,
      nome: 'Nestle Ninho 540g',
      descricao: 'Supermercado localizado na Rua da Moda, 202',
      image: '',
      categoria: 2,
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
    {
      id: 103,
      nome: 'Nestle Ninho 540g',
      descricao: 'Supermercado localizado na Rua da Moda, 202',
      image: '',
      categoria: 2,
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
    {
      id: 104,
      nome: 'Nestle Ninho 540g',
      descricao: 'Supermercado localizado na Rua da Moda, 202',
      image: '',
      categoria: 2,
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
    {
      id: 105,
      nome: 'Nestle Ninho 540g',
      descricao: 'Supermercado localizado na Rua da Moda, 202',
      image: '',
      categoria: 2,
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
    {
      id: 106,
      nome: 'Nestle Ninho 540g',
      descricao: 'Supermercado localizado na Rua da Moda, 202',
      image: '',
      categoria: 2,
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
    {
      id: 107,
      nome: 'Nestle Ninho 540g',
      descricao: 'Supermercado localizado na Rua da Moda, 202',
      image: '',
      categoria: 2,
      created_at: '2024-01-01',
      updated_at: '2024-01-01',
    },
  ];

  getProdutos(): Produto[] {
    return this.produtos;
  }
}