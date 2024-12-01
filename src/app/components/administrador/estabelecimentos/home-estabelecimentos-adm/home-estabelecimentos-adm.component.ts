import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderAdministradorComponent } from '../../header-administrador/header-administrador.component';
import { CardEstabelecimentoAdmComponent } from '../../../estabelecimento/card-estabelecimento-adm/card-estabelecimento-adm.component'; // Certifique-se de que o caminho está correto
import { Estabelecimento } from '../../../../shared/interface';

@Component({
  selector: 'app-home-estabelecimentos-adm',
  standalone: true,
  imports: [CommonModule, HeaderAdministradorComponent, RouterModule, CardEstabelecimentoAdmComponent, FormsModule], // Certifique-se de que CardEstabelecimentoAdmComponent está aqui
  templateUrl: './home-estabelecimentos-adm.component.html',
  styleUrls: ['./home-estabelecimentos-adm.component.css']
}) 

export class HomeEstabelecimentosADMComponent implements OnInit {
  estabelecimentos: Estabelecimento[] = []; 
  searchQuery: string = ''; 
  sortOption: string = 'A-Z'; 
  filteredEstabelecimentos: Estabelecimento[] = []; 
  menuVisible = false;

  ngOnInit(): void {
    // Simulação de estabelecimentos com base na interface
    this.estabelecimentos = [
      {
        id: 1,
        nome: 'Padaria do Bairro',
        endereco: 'Rua das Flores, 123',
        telefone: '(11) 1234-5678',
        imagem: 'assets/estabelecimentos-adm.png',
      },
      {
        id: 2,
        nome: 'Supermercado Ponto Certo',
        endereco: 'Av. Central, 456',
        telefone: '(11) 8765-4321',
        imagem: 'assets/estabelecimentos-adm.png',
      },
      {
        id: 3,
        nome: 'Academia FitLife',
        endereco: 'Rua da Saúde, 789',
        telefone: '(11) 5555-7777',
        imagem: 'assets/estabelecimentos-adm.png',
      },
      {
        id: 4,
        nome: 'Restaurante Saboroso',
        endereco: 'Praça das Nações, 101',
        telefone: '(11) 9999-8888',
        imagem: 'assets/estabelecimentos-adm.png',
      },
      {
        id: 5,
        nome: 'Loja de Roupas Elegance',
        endereco: 'Rua da Moda, 202',
        telefone: '(11) 3333-2222',
        imagem: 'assets/estabelecimentos-adm.png',
      },
    ];

    this.filteredEstabelecimentos = [...this.estabelecimentos];
  }

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  onSearch(): void {
    this.filteredEstabelecimentos = this.estabelecimentos.filter(estabelecimento =>
      estabelecimento.nome.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.applySorting();
  }

  onSortChange(): void {
    this.applySorting();
  }

  private applySorting(): void {
    this.filteredEstabelecimentos.sort((a, b) =>
      this.sortOption === 'A-Z'
        ? a.nome.localeCompare(b.nome)
        : b.nome.localeCompare(a.nome)
    );
  }
}
