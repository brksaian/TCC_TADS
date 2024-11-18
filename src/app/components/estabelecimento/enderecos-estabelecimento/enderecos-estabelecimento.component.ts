import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderEstabelecimentoComponent } from '../header-estabelecimento';
import { CardEnderecoComponent } from '../../endereco/card-endereco/card-endereco.component';
import { Estabelecimento } from '../../../shared/interface';

@Component({
  selector: 'app-enderecos-estabelecimento',
  standalone: true,
  imports: [CommonModule,HeaderEstabelecimentoComponent, CardEnderecoComponent],
  templateUrl: './enderecos-estabelecimento.component.html',
  styleUrls: ['./enderecos-estabelecimento.component.css']
})
export class EnderecosEstabelecimentoComponent {
  estabelecimentos: Estabelecimento[] = [
    {
      id: 1,
      nome: 'Estabelecimento Centro',
      endereco: 'Rua das Flores, 123 - Centro',
      telefone: '(11) 1234-5678',
      imagem: './assets/estabelecimento-provisorio.png',
    },
    {
      id: 2,
      nome: 'Estabelecimento Norte',
      endereco: 'Avenida das Palmeiras, 456 - Norte',
      telefone: '(11) 2345-6789',
      imagem: './assets/estabelecimento-provisorio.png',
    },
    {
      id: 3,
      nome: 'Estabelecimento Sul',
      endereco: 'Rua do Mercado, 789 - Sul',
      telefone: '(11) 3456-7890',
      imagem: './assets/estabelecimento-provisorio.png',
    },
    {
      id: 4,
      nome: 'Estabelecimento Sul 2',
      endereco: 'Rua do Mercado, 1499 - Sul',
      telefone: '(11) 3456-7892',
      imagem: './assets/estabelecimento-provisorio.png',
    },
    {
      id: 5,
      nome: 'Estabelecimento - Região Metropolitana Sul',
      endereco: 'Rua do tingui, 099 - Região Metropolitana Sul',
      telefone: '(11) 3456-8002',
      imagem: './assets/estabelecimento-provisorio.png',
    },
    {
      id: 6,
      nome: 'Estabelecimento - Região Metropolitana Norte',
      endereco: 'Av. Ayrton Senna, 389 - Região Metropolitana Norte',
      telefone: '(11) 3456-8005',
      imagem: './assets/estabelecimento-provisorio.png',
    },
    {
      id: 7,
      nome: 'Estabelecimento - Região Metropolitana Oeste',
      endereco: 'Rua Catedral, 401 - Região Metropolitana Oeste',
      telefone: '(11) 3456-9001',
      imagem: './assets/estabelecimento-provisorio.png',
    },
  ];

  constructor(private router: Router) {}

  cadastrarEndereco() {
    this.router.navigate(['endereco/novo-endereco']);
  }
}
