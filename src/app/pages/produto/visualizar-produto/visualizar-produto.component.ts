import { Component } from '@angular/core';
import { Avaliacao, Produto } from '../../../shared/interface';
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
  produto: Produto = {
    id: '1',
    name: 'Pão de Forma',
    code: '001', // Adicionado código fictício
    category: '1', // ID da categoria
    price: 6.69, // Corrigido para "price"
    image: 'https://via.placeholder.com/150',
    unit: 'UND', // Unidade adicionada
    storeId: 'store001', // ID fictício da loja
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

  comentarios: Avaliacao[] = [
    {
      id: '1',
      product: {
        id: '1',
        name: 'Produto 1',
        code: 'null',
        category: null,
        image: null,
        price: null,
        unit: null,
        quantity: 0,
        storeId: null,
        description: null,
      },
      store: {
        id: '1',
        correlationId: 'null',
        store: {
          id: '1',
          name: 'Loja Exemplo',
          address: {
            street: 'Rua Exemplo',
            number: '123',
            neighborhood: 'Bairro Exemplo',
            city: 'Cidade Exemplo',
            state: 'EX',
          },
          cnpj: '12345678901234',
        },
        distance: 0.0,
      },
      user: {
        id: '101',
        keycloakId: 'null',
        firstName: 'Usuário 1',
        lastName: 'Sobrenome',
        email: 'usuario1@email.com',
        photo: null,
      },
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis finibus tellus id feugiat.',
      rating: 4,
      approved: null,
      createdAt: '2024-11-30T10:00:00',
    },
    {
      id: '2',
      product: {
        id: '1',
        name: 'Produto 1',
        code: 'null',
        category: null,
        image: null,
        price: null,
        unit: null,
        quantity: 0,
        storeId: null,
        description: null,
      },
      store: {
        id: '2',
        correlationId: 'null',
        store: {
          id: '2',
          name: 'Loja Exemplo 2',
          address: {
            street: 'Rua Exemplo 2',
            number: '456',
            neighborhood: 'Outro Bairro',
            city: 'Outra Cidade',
            state: 'XY',
          },
          cnpj: '98765432109876',
        },
        distance: 1.5,
      },
      user: {
        id: '102',
        keycloakId: 'null',
        firstName: 'Usuário 2',
        lastName: 'Sobrenome',
        email: 'usuario2@email.com',
        photo: null,
      },
      review:
        'Sed luctus vitae lorem sed convallis. Maecenas convallis nec eros tincidunt sagittis.',
      rating: 5,
      approved: null,
      createdAt: '2024-11-29T14:30:00',
    },
    {
      id: '3',
      product: {
        id: '2',
        name: 'Produto 2',
        code: 'null',
        category: null,
        image: null,
        price: null,
        unit: null,
        quantity: 0,
        storeId: null,
        description: null,
      },
      store: {
        id: '3',
        correlationId: 'null',
        store: {
          id: '3',
          name: 'Loja Exemplo 3',
          address: {
            street: 'Rua Exemplo 3',
            number: '789',
            neighborhood: 'Bairro Central',
            city: 'Capital',
            state: 'ZZ',
          },
          cnpj: '12398765432100',
        },
        distance: 3.0,
      },
      user: {
        id: '103',
        keycloakId: 'null',
        firstName: 'Usuário 3',
        lastName: 'Sobrenome',
        email: 'usuario3@email.com',
        photo: null,
      },
      review: 'Produto bom, mas poderia ser melhor embalado. Entrega rápida!',
      rating: 3,
      approved: null,
      createdAt: '2024-11-28T09:15:00',
    },
  ];
}
