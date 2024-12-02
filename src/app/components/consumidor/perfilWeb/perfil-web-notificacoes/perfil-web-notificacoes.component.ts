import { Component } from '@angular/core';
import { Notificacao } from '../../../../shared/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil-web-notificacoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-web-notificacoes.component.html',
  styleUrl: './perfil-web-notificacoes.component.css',
})
export class PerfilWebNotificacoesComponent {
  notificacoes: Notificacao[] = [
    {
      id: '1',
      tipo: 'alteracao-preco',
      titulo: 'Alteração de Preço do Produto',
      mensagem:
        'O produto Pão Forma Seven Boys foi atualizado para um novo valor',
      data: '05 Maio 2024 - 12:30',
      linkTexto: 'Ver Produto',
      linkUrl: '/produto/1',
    },
    {
      id: '2',
      tipo: 'novo-seguidor',
      titulo: 'Novo Seguidor',
      mensagem: 'O usuário Maria José acabou de seguir você no Nota Social',
      data: '04 Maio 2024 - 12:30',
      linkTexto: 'Ver Usuário',
      linkUrl: '/usuario/1',
    },
    {
      id: '3',
      tipo: 'novo-comentario',
      titulo: 'Novo Comentário',
      mensagem:
        'Você recebeu um comentário na sua avaliação do produto Pão Forma Seven Boys',
      data: '03 Maio 2024 - 12:30',
      linkTexto: 'Ver Comentário',
      linkUrl: '/comentario/1',
    },
  ];

  removerNotificacao(id: string): void {
    this.notificacoes = this.notificacoes.filter(
      (notificacao) => notificacao.id !== id
    );
  }
}