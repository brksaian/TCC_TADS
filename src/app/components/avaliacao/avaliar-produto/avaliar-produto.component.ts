import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-avaliar-produto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './avaliar-produto.component.html',
  styleUrl: './avaliar-produto.component.css'
})
export class AvaliarProdutoComponent {
  estrelas: number = 0;
  comentario: string = '';

  @Output() closeModal: EventEmitter<void> = new EventEmitter();
  @Output() submitAvaliacao: EventEmitter<{ estrelas: number, comentario: string }> = new EventEmitter();

  // Fechar o modal
  fecharModal() {
    this.closeModal.emit();
  }

  // Enviar avaliação
  enviarAvaliacao() {
    if (this.estrelas > 0 && this.comentario.trim()) {
      this.submitAvaliacao.emit({ estrelas: this.estrelas, comentario: this.comentario });
      this.fecharModal();
    } else {
      console.log('Preencha todos os campos.');
    }
  }

  // Setar a quantidade de estrelas
  setEstrelas(valor: number) {
    this.estrelas = valor;
  }
}
