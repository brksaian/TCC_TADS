import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Avaliacao } from '../../../shared/interface';

@Component({
  selector: 'app-avaliacoesuser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avaliacoesuser.component.html',
  styleUrl: './avaliacoesuser.component.css',
})
export class AvaliacoesuserComponent implements OnInit {
  avaliacoes: Avaliacao[] = [];
  produtos: { [key: number]: { nome: string; imagem: string } } = {
    1: {
      nome: 'Pão Forma Seven Boys',
      imagem: 'https://via.placeholder.com/100?text=Pão+Forma',
    },
    2: {
      nome: 'Bolo de Chocolate',
      imagem: 'https://via.placeholder.com/100?text=Bolo+Chocolate',
    },
  };

  ngOnInit(): void {
    // Dados fake para as avaliações
    this.avaliacoes = [
      {
        id: 1,
        produto_id: 1,
        usuario_id: 101,
        estrelas: 4,
        comentario:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis finibus tellus id feugiat.',
        created_at: '2024-11-30T10:00:00',
      },
      {
        id: 2,
        produto_id: 1,
        usuario_id: 102,
        estrelas: 5,
        comentario:
          'Sed luctus vitae lorem sed convallis. Maecenas convallis nec eros tincidunt sagittis.',
        created_at: '2024-11-29T14:30:00',
      },
      {
        id: 3,
        produto_id: 2,
        usuario_id: 103,
        estrelas: 3,
        comentario:
          'Produto bom, mas poderia ser melhor embalado. Entrega rápida!',
        created_at: '2024-11-28T09:15:00',
      },
    ];
  }

  getProduto(produto_id: number): { nome: string; imagem: string } {
    return (
      this.produtos[produto_id] || {
        nome: 'Produto Desconhecido',
        imagem: 'https://via.placeholder.com/100?text=Desconhecido',
      }
    );
  }
}
