import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderAdministradorComponent } from '../../header-administrador/header-administrador.component';
import { CardEstabelecimentoAdmComponent } from '../../../estabelecimento/card-estabelecimento-adm/card-estabelecimento-adm.component'; // Certifique-se de que o caminho está correto
import { Estabelecimento } from '../../../../shared/interface';

@Component({
  selector: 'app-editar-estabelecimento-adm',
  standalone: true,
  imports: [CommonModule, HeaderAdministradorComponent, CardEstabelecimentoAdmComponent, FormsModule],
  templateUrl: './editar-estabelecimento-adm.component.html',
  styleUrl: './editar-estabelecimento-adm.component.css'
})

export class EditarEstabelecimentoADMComponent {
  @Input() estabelecimento: Estabelecimento | null = null;
  @Output() closeModal = new EventEmitter<void>();

  isEditing = false; // Estado para alternar entre visualização e edição
  editedName: string = '';

  ngOnChanges(): void {
    if (this.estabelecimento) {
      this.editedName = this.estabelecimento.nome; // Inicializa o nome ao abrir a modal
    }
  }

  closeModalHandler(): void {
    this.closeModal.emit();
  }

  toggleEditMode(): void {
    this.isEditing = !this.isEditing;
  }

  saveChanges(): void {
    if (this.estabelecimento) {
      this.estabelecimento.nome = this.editedName; // Salva o novo nome no objeto
    }
    this.toggleEditMode(); // Volta para o modo de visualização
  }
}