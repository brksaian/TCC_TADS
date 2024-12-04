import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Estabelecimento } from '../../../shared/interface';

@Component({
  selector: 'app-busca-estabelecimento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './busca-estabelecimento.component.html',
  styleUrl: './busca-estabelecimento.component.css',
})
export class BuscaEstabelecimentoComponent {
  estabelecimentos: Estabelecimento[] = [
    {
      id: 1,
      nome: 'Carrefour',
      email: 'contato@carrefour.com',
      endereco: 'Rua das Flores, 123 - Centro',
      telefone: '(41) 98765-4321',
      imagem: 'https://via.placeholder.com/150/0000FF/808080?Text=Carrefour',
    },
    {
      id: 2,
      nome: 'Extra',
      email: 'contato@extra.com',
      endereco: 'Avenida Paulista, 456 - Bela Vista',
      telefone: '(11) 91234-5678',
      imagem: 'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Extra',
    },
    {
      id: 3,
      nome: 'Walmart',
      email: 'contato@walmart.com',
      endereco: 'Avenida Brasil, 789 - Jardim Botânico',
      telefone: '(21) 92345-6789',
      imagem: 'https://via.placeholder.com/150/008000/FFFFFF?Text=Walmart',
    },
    {
      id: 4,
      nome: 'Pão de Açúcar',
      email: 'contato@paodeacucar.com',
      endereco: 'Rua Augusta, 321 - Jardins',
      telefone: '(11) 93456-7890',
      imagem:
        'https://via.placeholder.com/150/FFFF00/000000?Text=Pão+de+Açúcar',
    },
  ];
  estabelecimentosFiltrados: Estabelecimento[] = [...this.estabelecimentos];

  buscarEstabelecimento(nome: string): void {
    nome = nome.toLowerCase();
    this.estabelecimentosFiltrados = this.estabelecimentos.filter((e) =>
      e.nome.toLowerCase().includes(nome)
    );
  }

  ordenarEstabelecimentos(criterio: string): void {
    if (criterio === 'az') {
      this.estabelecimentosFiltrados.sort((a, b) =>
        a.nome.localeCompare(b.nome)
      );
    } else if (criterio === 'za') {
      this.estabelecimentosFiltrados.sort((a, b) =>
        b.nome.localeCompare(a.nome)
      );
    }
  }
}
