import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../../services'; // Ajuste o caminho conforme necessário
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password-modal',
  templateUrl: './forgot-password-modal.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  styleUrls: ['./forgot-password-modal.component.css']
})
export class ForgotPasswordModalComponent {
  email: string = '';
  errorMessage: string = '';
  @Output() close = new EventEmitter<void>();

  constructor(private userService: UserService) {} // Injetando o UserService

  onSubmit() {
    this.userService.forgotPassword(this.email).subscribe(
      response => {
        // Adicione lógica para lidar com o sucesso, como mostrar uma mensagem de sucesso
        this.closeModal();
      },
      error => {
        this.errorMessage = 'Erro ao enviar o e-mail. Tente novamente.';
      }
    );
  }

  closeModal() {
    this.close.emit(); // Emite um evento para fechar a modal
  }
}
