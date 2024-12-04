import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Consumidor, getNome } from '../../../../shared/interface';

@Component({
  selector: 'app-editar-consumidor-adm',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-consumidor-adm.component.html',
  styleUrls: ['./editar-consumidor-adm.component.css'],
})
export class EditarConsumidorADMComponent {
  @Input() usuario: Consumidor | null = null; // Recebe os dados do usuário
  @Output() closeModal = new EventEmitter<void>(); // Emite evento para fechar a modal

  isEditing = false; // Estado para alternar entre visualização e edição
  editedName: string = '';

  getNome = getNome;

  ngOnChanges(): void {
    if (this.usuario) {
      this.editedName = getNome(this.usuario); // Inicializa o nome ao abrir a modal
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
      const splitedName = this.editedName.trim().split(' ');
      this.usuario.firstName = splitedName[0];
      this.usuario.lastName = splitedName.slice(1).join(' ');
    }
    this.toggleEditMode();
  }
}
