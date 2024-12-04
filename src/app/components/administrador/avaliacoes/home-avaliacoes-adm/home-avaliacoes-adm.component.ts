import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdministradorService } from '../../../../services';
import { Avaliacao } from '../../../../shared/interface';
import { CardAvaliacaoADMComponent } from '../card-avaliacao-adm';

@Component({
  selector: 'app-home-avaliacoes-adm',
  standalone: true,
  imports: [CommonModule, RouterModule, CardAvaliacaoADMComponent],
  templateUrl: './home-avaliacoes-adm.component.html',
  styleUrls: ['./home-avaliacoes-adm.component.css'],
})
export class HomeAvaliacoesADMComponent implements OnInit {
  avaliacoes: Avaliacao[] = []; // Lista de avaliações

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
    this.carregarAvaliacoes();
  }

  carregarAvaliacoes(): void {
    this.administradorService
      .listAllReviews(0, 10, 'ASC', 'createdAt')
      .subscribe({
        next: (response) => {
          this.avaliacoes = response.content; // Supondo que o backend retorna `content` como a lista
        },
        error: (error) => {
          console.error('Erro ao buscar avaliações:', error);
        },
      });
  }
}
