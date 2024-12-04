import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdministradorService } from '../../../../services';
import { Consumidor, getNome } from '../../../../shared/interface';
import { CardConsumidorComponent } from '../../../consumidor';
import { HeaderAdministradorComponent } from '../../header-administrador';
import { EditarConsumidorADMComponent } from '../editar-consumidor-adm';

@Component({
  selector: 'app-home-usuarios-adm',
  standalone: true,
  imports: [
    CommonModule,
    HeaderAdministradorComponent,
    RouterModule,
    FormsModule,
    CardConsumidorComponent,
    EditarConsumidorADMComponent,
  ],
  templateUrl: './home-usuarios-adm.component.html',
  styleUrl: './home-usuarios-adm.component.css',
})
export class HomeUsuariosADMComponent implements OnInit {
  usuarios: Consumidor[] = []; // Lista de usuários no formato Consumidor
  filteredUsuarios: Consumidor[] = [];
  searchQuery: string = '';
  sortOption: string = 'A-Z';
  menuVisible = false;
  currentPage = 0;
  pageSize = 10;

  isModalOpen = false; // Controle da visibilidade da modal
  selectedUsuario: Consumidor | null = null; // Armazenar o usuário selecionado

  constructor(private administradorService: AdministradorService) {}
  ngOnInit(): void {
    // Simulação de usuários
    this.usuarios = [
      {
        id: '1',
        firstName: 'Ana',
        lastName: 'Lúcia',
        notesCount: 12,
        productsCount: 3,
        rank: 1,
        profileUrl: '/perfil/1',
        imagem: 'assets/usuarios-adm.png',
        pontos: 150,
      },
      {
        id: '2',
        firstName: 'Bruno',
        lastName: 'Carlos',
        notesCount: 8,
        productsCount: 5,
        rank: 2,
        profileUrl: '/perfil/2',
        imagem: 'assets/usuarios-adm.png',
        pontos: 120,
      },
      {
        id: '3',
        firstName: 'Carlos',
        lastName: 'Alberto Sampaio',
        notesCount: 20,
        productsCount: 4,
        rank: 3,
        profileUrl: '/perfil/3',
        imagem: 'assets/usuarios-adm.png',
        pontos: 180,
      },
      {
        id: '4',
        firstName: 'Débora',
        lastName: 'Correia',
        notesCount: 10,
        productsCount: 2,
        rank: 4,
        profileUrl: '/perfil/4',
        imagem: 'assets/usuarios-adm.png',
        pontos: 160,
      },
      {
        id: '5',
        firstName: 'Eduardo',
        lastName: 'Lima',
        notesCount: 5,
        productsCount: 8,
        rank: 5,
        profileUrl: '/perfil/5',
        imagem: 'assets/usuarios-adm.png',
        pontos: 110,
      },
    ];

    this.fetchUsers(this.currentPage, this.pageSize);
  }

  fetchUsers(page: number, size: number): void {
    this.administradorService.listUsers(page, size).subscribe({
      next: (response) => {
        this.usuarios = response.content; // Adapte conforme o formato da resposta
        this.filteredUsuarios = [...this.usuarios];
      },
      error: (error) => {
        console.error('Erro ao listar usuários:', error);
      },
    });
  }

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  onSearch(): void {
    this.filteredUsuarios = this.usuarios.filter((usuario) =>
      getNome(usuario).toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.applySorting();
  }

  onSortChange(): void {
    this.applySorting();
  }

  private applySorting(): void {
    this.filteredUsuarios.sort((a, b) =>
      this.sortOption === 'A-Z'
        ? getNome(a).localeCompare(getNome(b))
        : getNome(b).localeCompare(getNome(a))
    );
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.fetchUsers(this.currentPage, this.pageSize);
  }
  openModal(usuario: Consumidor): void {
    this.selectedUsuario = usuario;
    this.isModalOpen = true; // Abre a modal
  }

  closeModal(): void {
    this.isModalOpen = false; // Fecha a modal
    this.selectedUsuario = null;
  }
}
