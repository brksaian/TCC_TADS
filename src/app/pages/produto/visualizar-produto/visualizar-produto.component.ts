import { Component } from '@angular/core';
import { ComentariosProdutoComponent } from './comentarios-produto/comentarios-produto.component';
import { HeaderVisualizarProdutoComponent } from './header-visualizar-produto/header-visualizar-produto.component';
import { HistoricoPrecoComponent } from './historico-preco/historico-preco.component';

@Component({
  selector: 'app-visualizar-produto',
  standalone: true,
  imports: [
    HeaderVisualizarProdutoComponent,
    HistoricoPrecoComponent,
    ComentariosProdutoComponent,
  ],
  templateUrl: './visualizar-produto.component.html',
  styleUrl: './visualizar-produto.component.css',
})
export class VisualizarProdutoComponent {
  produto = {
    id: 1,
    nome: 'Pão de Forma',
    descricao: 'Pão de forma macio e saboroso.',
    categoria: 1, // ID da categoria como número
    preco: 6.69,
    image: 'https://via.placeholder.com/150',
    created_at: new Date().toISOString(), // Conversão para string
    updated_at: new Date().toISOString(),
  };

  precos = [
    {
      id: 1,
      produto_id: 1,
      estabelecimento_id: 1,
      preco: 6.5,
      data: new Date('2024-11-01'), // Converte para Date
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 2,
      produto_id: 1,
      estabelecimento_id: 2,
      preco: 6.69,
      data: new Date('2024-11-02'), // Converte para Date
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ];

  comentarios = [
    {
      id: 1,
      produto_id: 1,
      usuario_id: 1,
      estrelas: 5,
      comentario: 'Ótimo produto!',
      created_at: new Date().toISOString(),
    },
    {
      id: 2,
      produto_id: 1,
      usuario_id: 2,
      estrelas: 4,
      comentario: 'Poderia ser mais barato.',
      created_at: new Date().toISOString(),
    },
  ];
}
