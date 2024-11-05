import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AvaliacaoService, UserService } from '../../../services';
import { Avaliacao } from '../../../shared/interface';
import { VisualizarAvaliacaoConsumidorComponent } from '../visualizar-avaliacao-consumidor';

@Component({
  selector: 'app-listar-avaliacoes',
  standalone: true,
  imports: [CommonModule, VisualizarAvaliacaoConsumidorComponent],
  templateUrl: './listar-avaliacoes.component.html',
  styleUrl: './listar-avaliacoes.component.css'
})
export class ListarAvaliacoesComponent implements OnInit {
  avaliacoes: Avaliacao[] = [];

  constructor(private avaliacaoService: AvaliacaoService, private usuarioService: UserService) {}

  ngOnInit() {
    const userLogado = this.usuarioService.getUsuarioLogado();
    if (userLogado?.id) {
      this.avaliacaoService.getAvaliacoesPorUsuario(userLogado.id).subscribe((data: Avaliacao[]) => {
        this.avaliacoes = data;
      });
    } else {
      console.error('Usuário não está logado');
    }
  }
}
