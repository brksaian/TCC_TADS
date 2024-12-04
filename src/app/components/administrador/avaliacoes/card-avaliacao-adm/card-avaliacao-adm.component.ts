import { Component, Input } from '@angular/core';
import { AdministradorService } from '../../../../services';
import { Avaliacao } from '../../../../shared/interface';

@Component({
  selector: 'app-card-avaliacao-adm',
  standalone: true,
  templateUrl: './card-avaliacao-adm.component.html',
  styleUrl: './card-avaliacao-adm.component.css',
})
export class CardAvaliacaoADMComponent {
  @Input() avaliacao!: Avaliacao;
  @Input() atualizar?: () => void; // Função para atualizar a tabela

  constructor(private administradorService: AdministradorService) {}

  // Formatação das estrelas (★ para preenchido, ☆ para vazio)
  get estrelasFormatadas(): string {
    return (
      '★'.repeat(this.avaliacao.rating) + '☆'.repeat(5 - this.avaliacao.rating)
    );
  }

  // Aprovar a avaliação
  approve(): void {
    this.administradorService.approveReview(this.avaliacao.id).subscribe({
      next: () => {
        console.log('Avaliação aprovada com sucesso!');
        if (this.atualizar) this.atualizar(); // Chama a função de atualização
      },
      error: (err) => {
        console.error('Erro ao aprovar a avaliação:', err);
        alert('Erro ao aprovar a avaliação. Tente novamente.');
      },
    });
  }

  // Reprovar a avaliação
  reject(): void {
    this.administradorService.rejectReview(this.avaliacao.id).subscribe({
      next: () => {
        console.log('Avaliação reprovada com sucesso!');
        if (this.atualizar) this.atualizar(); // Chama a função de atualização
      },
      error: (err) => {
        console.error('Erro ao reprovar a avaliação:', err);
        alert('Erro ao reprovar a avaliação. Tente novamente.');
      },
    });
  }
}
