import { Component, Input, OnInit } from '@angular/core';
import { ProdutoService } from '../../../../services';
import { Produto } from '../../../../shared/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos-similares',
  templateUrl: './produtos-similares.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class ProdutosSimilaresComponent implements OnInit {
  @Input() produtoId!: string;

  produtosSimilares: Produto[] = [];
  loading = false;
  error: string | null = null;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    if (this.produtoId) {
      this.fetchProdutosSimilares();
    }
  }

  // Método para buscar produtos similares
  fetchProdutosSimilares() {
    this.loading = true;
    this.error = null;

    this.produtoService.getProdutosSimilares(this.produtoId)
      .subscribe({
        next: (produtos) => {
          this.produtosSimilares = produtos;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Erro ao carregar produtos similares';
          this.loading = false;
        }
      });
  }
}
