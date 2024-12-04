import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBottleWater,
  faBuilding,
  faMessage,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { AdministradorService } from '../../../services';
import {
  ListarProdutosSemCategoriaComponent,
  ListarProdutosSemImagemComponent,
} from '../produtos';

@Component({
  selector: 'app-home-administrador',
  standalone: true,
  imports: [
    ListarProdutosSemImagemComponent,
    ListarProdutosSemCategoriaComponent,
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './home-administrador.component.html',
  styleUrls: ['./home-administrador.component.css'], // Corrigido para "styleUrls"
})
export class HomeAdministradorComponent implements OnInit {
  // Ícones FontAwesome
  faUsers = faUsers;
  faBuilding = faBuilding;
  faBottleWater = faBottleWater;
  faMessage = faMessage;

  // Dados retornados pela API
  customers: number = 0;
  stores: number = 0;
  totalRegisteredProducts: number = 0;
  totalReviews: number = 0;

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
    // Chama o método para buscar os dados
    this.administradorService.getTotalRegisteredUsers().subscribe({
      next: (data) => {
        this.customers = data.customers;
        this.stores = data.stores;
      },
      error: (error) => {
        console.error(
          'Erro ao buscar os dados de usuários registrados:',
          error
        );
      },
    });

    this.administradorService.getTotalRegisteredProducts().subscribe({
      next: (data) => {
        this.totalRegisteredProducts = data.totalRegisteredProducts;
      },
      error: (error) => {
        console.error(
          'Erro ao buscar os dados de usuários registrados:',
          error
        );
      },
    });

    this.administradorService.getTotalRegisteredReviews().subscribe({
      next: (data) => {
        this.totalReviews = data.totalReviews;
      },
      error: (error) => {
        console.error(
          'Erro ao buscar os dados de usuários registrados:',
          error
        );
      },
    });
  }
}
