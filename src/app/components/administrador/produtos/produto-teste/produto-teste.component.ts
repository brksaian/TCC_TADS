import { Component } from '@angular/core';
import { Produto } from '../../../../shared/interface';

@Component({
  selector: 'app-produto-teste',
  standalone: true,
  imports: [],
  templateUrl: './produto-teste.component.html',
  styleUrl: './produto-teste.component.css',
})
export class ProdutoTesteComponent {
  produtos: Produto[] = []

  getProdutos(): Produto[] {
    return this.produtos;
  }
}
