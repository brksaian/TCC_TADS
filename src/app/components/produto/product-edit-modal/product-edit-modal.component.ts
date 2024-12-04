import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdministradorService, CategoriaService } from '../../../services';
import { Produto } from '../../../shared/interface';

@Component({
  selector: 'app-product-edit-modal',
  standalone: true,
  templateUrl: './product-edit-modal.component.html',
  styleUrls: ['./product-edit-modal.component.css'],
  imports: [CommonModule, FormsModule],
})
export class ProductEditModalComponent implements OnInit {
  @Input() produto!: Produto; // Recebe o produto a ser editado
  @Output() onSave = new EventEmitter<Produto>();
  @Output() onClose = new EventEmitter<void>();

  editedProduto!: Produto;
  categorias: any[] = []; // Lista de categorias

  constructor(
    private administradorService: AdministradorService,
    private categoriasService: CategoriaService
  ) {}

  ngOnInit() {
    // Clona o objeto para edição sem modificar o original
    this.editedProduto = { ...this.produto };

    console.log(this.produto);

    // Carrega as categorias
    this.carregarCategorias();
  }

  carregarCategorias(): void {
    this.categoriasService.getCategorias().subscribe({
      next: (response) => {
        this.categorias = response.content || []; // Supondo que o backend retorna `content`
        this.preSelecionarCategoria(); // Preenche o campo caso o produto tenha categoria
      },
      error: (err) => {
        console.error('Erro ao carregar categorias:', err);
      },
    });
  }

  preSelecionarCategoria(): void {
    if (this.editedProduto.category) {
      const categoriaEncontrada = this.categorias.find(
        (categoria) => categoria.id === this.editedProduto.category
      );
      if (categoriaEncontrada) {
        this.editedProduto.category = categoriaEncontrada.id;
      }
    }
  }

  saveChanges() {
    if (this.editedProduto.category) {
      // Vincula a categoria ao produto
      this.administradorService
        .addCategoryToProduct(
          this.editedProduto.id,
          this.editedProduto.category
        )
        .subscribe({
          next: () => {
            this.onSave.emit(this.editedProduto); // Emite as alterações ao componente pai
          },
          error: (err) => {
            console.error('Erro ao vincular categoria ao produto:', err);
            alert('Erro ao vincular categoria ao produto. Tente novamente.');
          },
        });
    } else {
      alert('A categoria é obrigatória!');
    }
  }

  cancelEdit() {
    this.onClose.emit(); // Emite o cancelamento
  }

  updateImage(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      this.administradorService
        .updateProductImage(this.editedProduto.id, file)
        .subscribe({
          next: (response) => {
            console.log(response);
            if (response?.image) {
              // Atualiza a imagem do produto com a URL retornada pelo backend
              this.editedProduto.image = response?.image;
            } else {
              alert('Imagem atualizada.');
            }
          },
          error: (err) => {
            console.error('Erro ao atualizar imagem:', err);
            alert('Erro ao atualizar imagem. Tente novamente.');
          },
        });
    }
  }
}
