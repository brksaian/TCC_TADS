import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService, ProdutoService } from '../../../services';
import { Produto } from '../../../shared/interface';
import { ProductEditModalComponent } from '../product-edit-modal/product-edit-modal.component';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css'],
  imports: [CommonModule, FormsModule, RouterModule, ProductEditModalComponent],
})
export class CardProdutoComponent implements OnInit {
  @Input() produto!: Produto;
  precoMedio: number | null = null;
  isCliente: boolean = false;
  isAdmin: boolean = false;

  isModalOpen: boolean = false;

  constructor(
    private produtoService: ProdutoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isCliente = this.authService.getUserRole() === 'CLIENTE';
    this.isAdmin = this.authService.getUserRole() === 'ADMIN';
  }

  handleCardClick(): void {
    if (this.isAdmin) {
      this.isModalOpen = true; // Abre a modal
    } else {
      console.log('Usuário não autorizado a editar produtos.');
    }
  }

  openEditModal(): void {
    if (this.isAdmin) {
      this.isModalOpen = true;
    }
  }

  handleSave(updatedProduto: Produto): void {
    this.isModalOpen = false;
  }

  handleClose(): void {
    this.isModalOpen = false; // Fecha a modal sem salvar
  }

  adicionarAoCarrinho(produto: Produto) {
    console.log('Produto adicionado ao carrinho:', produto);
  }

  adicionarAosFavoritos(produto: Produto) {
    console.log('Produto adicionado aos favoritos:', produto);
  }
}
