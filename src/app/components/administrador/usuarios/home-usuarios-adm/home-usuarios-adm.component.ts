import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { AdministradorService } from '../../../../services';
import { Consumidor, getNome } from '../../../../shared/interface';
import { CardConsumidorComponent } from '../../../consumidor';

@Component({
  selector: 'app-home-usuarios-adm',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CardConsumidorComponent,
    FontAwesomeModule,
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

  faMagnifyingGlass = faMagnifyingGlass;
  faChevronDown = faChevronDown;

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
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
}
