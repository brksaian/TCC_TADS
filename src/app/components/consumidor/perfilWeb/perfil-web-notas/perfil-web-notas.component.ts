import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Nota {
  id: number;
  titulo: string;
  dataCadastro: string;
}

@Component({
  selector: 'app-perfil-web-notas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-web-notas.component.html',
  styleUrls: ['./perfil-web-notas.component.css'],
})
export class PerfilWebNotasComponent {
  notas: Nota[] = [
    { id: 1, titulo: 'NOTA 1', dataCadastro: '01/05/2024' },
    { id: 2, titulo: 'NOTA 2', dataCadastro: '02/05/2024' },
    { id: 3, titulo: 'NOTA 3', dataCadastro: '03/05/2024' },
    { id: 4, titulo: 'NOTA 4', dataCadastro: '04/05/2024' },
  ];

  notasFiltradas: Nota[] = [...this.notas];

  buscarNota(termo: string): void {
    termo = termo.toLowerCase();
    this.notasFiltradas = this.notas.filter((nota) =>
      nota.titulo.toLowerCase().includes(termo)
    );
  }

  ordenarNotas(criterio: string): void {
    if (criterio === 'asc') {
      this.notasFiltradas.sort(
        (a, b) =>
          new Date(a.dataCadastro).getTime() -
          new Date(b.dataCadastro).getTime()
      );
    } else if (criterio === 'desc') {
      this.notasFiltradas.sort(
        (a, b) =>
          new Date(b.dataCadastro).getTime() -
          new Date(a.dataCadastro).getTime()
      );
    }
  }
}
