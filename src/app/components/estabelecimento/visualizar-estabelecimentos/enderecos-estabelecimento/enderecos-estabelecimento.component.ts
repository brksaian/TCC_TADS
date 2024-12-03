import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Estabelecimento } from '../../../../shared/interface';
import { CardEnderecoComponent } from '../../../endereco';

@Component({
  selector: 'app-enderecos-estabelecimento',
  standalone: true,
  imports: [CommonModule, CardEnderecoComponent],
  templateUrl: './enderecos-estabelecimento.component.html',
  styleUrls: ['./enderecos-estabelecimento.component.css'],
})
export class EnderecosEstabelecimentoComponent {
  estabelecimentos: Estabelecimento[] = [
    {
      id: 1,
      nome: 'Carrefour',
      email: 'Carrefour1@gmail.com',
      endereco: 'Rua das Flores, 123',
      telefone: '(11) 1234-5678',
      imagem: 'assets/estabelecimentos-adm.png',
    },
    {
      id: 2,
      nome: 'Condor',
      email: 'Condor01@gmail.com',
      endereco: 'Av. Central, 456',
      telefone: '(11) 8765-4321',
      imagem: 'assets/estabelecimentos-adm.png',
    },
    {
      id: 3,
      nome: 'Carrefour',
      email: 'Carrefour02@gmail.com',
      endereco: 'Rua da Saúde, 789',
      telefone: '(11) 5555-7777',
      imagem: 'assets/estabelecimentos-adm.png',
    },
    {
      id: 4,
      nome: 'Assaí',
      email: 'AssaíMercados1@gmail.com',
      endereco: 'Praça das Nações, 101',
      telefone: '(11) 9999-8888',
      imagem: 'assets/estabelecimentos-adm.png',
    },
    {
      id: 5,
      nome: 'Boni',
      email: 'BoniSuperMercados1@gmail.com',
      endereco: 'Rua da Moda, 202',
      telefone: '(11) 3333-2222',
      imagem: 'assets/estabelecimentos-adm.png',
    },
  ];

  constructor(private router: Router) {}

  cadastrarEndereco() {
    this.router.navigate(['endereco/novo-endereco']);
  }
}
