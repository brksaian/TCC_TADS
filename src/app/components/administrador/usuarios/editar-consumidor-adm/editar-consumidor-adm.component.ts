import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Consumidor } from '../../../../shared/interface';
import { CardConsumidorComponent } from '../../../consumidor/card-consumidor/card-consumidor.component';

@Component({
  selector: 'app-editar-consumidor-adm',
  standalone: true,
  imports: [CommonModule, FormsModule,CardConsumidorComponent],
  templateUrl: './editar-consumidor-adm.component.html',
  styleUrls: ['./editar-consumidor-adm.component.css']
})
export class EditarConsumidorADMComponent {
  @Input() usuario: Consumidor | null = null;  // Recebe os dados do usuário
  @Output() closeModal = new EventEmitter<void>();  // Emite evento para fechar a modal

  isEditing = false;  // Estado para alternar entre visualização e edição
  editedName: string = '';

  ngOnChanges(): void {
    if (this.usuario) {
      this.editedName = this.usuario.nome;  // Inicializa o nome ao abrir a modal
    }
  }

  closeModalHandler(): void {
    this.closeModal.emit();
  }

  toggleEditMode(): void {
    this.isEditing = !this.isEditing;
  }

  saveChanges(): void {
    if (this.usuario) {
      this.usuario.nome = this.editedName;  // Salva o novo nome no objeto
    }
    this.toggleEditMode();  // Volta para o modo de visualização
  }
}
