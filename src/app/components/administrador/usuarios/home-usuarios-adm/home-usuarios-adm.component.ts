import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { HeaderAdministradorComponent } from '../../header-administrador/header-administrador.component';
import { CardConsumidorComponent } from '../../../consumidor/card-consumidor/card-consumidor.component';
import { Consumidor } from '../../../../shared/interface'; 

@Component({
  selector: 'app-home-usuarios-adm',
  standalone: true,
  imports: [CommonModule, HeaderAdministradorComponent, RouterModule, FormsModule, CardConsumidorComponent],
  templateUrl: './home-usuarios-adm.component.html',
  styleUrl: './home-usuarios-adm.component.css'
})
export class HomeUsuariosADMComponent implements OnInit {
  usuarios: Consumidor[] = [];  // Lista de usuários no formato Consumidor
  searchQuery: string = '';
  sortOption: string = 'A-Z';
  filteredUsuarios: Consumidor[] = [];
  menuVisible = false;

  ngOnInit(): void {
    // Simulação de usuários
    this.usuarios = [
      { 
        id: '1',
        nome: 'Ana',
        notesCount: 12,
        productsCount: 3,
        rank: 1,
        profileUrl: '/perfil/1',
        imagem: 'assets/usuarios-adm.png',
        pontos: 150
      },
      { 
        id: '2',
        nome: 'Bruno',
        notesCount: 8,
        productsCount: 5,
        rank: 2,
        profileUrl: '/perfil/2',
        imagem: 'assets/usuarios-adm.png',
        pontos: 120
      },
      { 
        id: '3',
        nome: 'Carlos',
        notesCount: 20,
        productsCount: 4,
        rank: 3,
        profileUrl: '/perfil/3',
        imagem: 'assets/usuarios-adm.png',
        pontos: 180
      },
      { 
        id: '4',
        nome: 'Débora',
        notesCount: 10,
        productsCount: 2,
        rank: 4,
        profileUrl: '/perfil/4',
        imagem: 'assets/usuarios-adm.png',
        pontos: 160
      },
      { 
        id: '5',
        nome: 'Eduardo',
        notesCount: 5,
        productsCount: 8,
        rank: 5,
        profileUrl: '/perfil/5',
        imagem: 'assets/usuarios-adm.png',
        pontos: 110
      }
    ];

    this.filteredUsuarios = [...this.usuarios];
  }

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  onSearch(): void {
    this.filteredUsuarios = this.usuarios.filter(usuario =>
      usuario.nome.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.applySorting();
  }

  onSortChange(): void {
    this.applySorting();
  }

  private applySorting(): void {
    this.filteredUsuarios.sort((a, b) =>
      this.sortOption === 'A-Z'
        ? a.nome.localeCompare(b.nome)
        : b.nome.localeCompare(a.nome)
    );
  }
}
