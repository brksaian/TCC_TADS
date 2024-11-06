import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../services';

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

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.forgotPassword(this.email).subscribe(
      response => {
        this.closeModal();
      },
      error => {
        this.errorMessage = 'Erro ao enviar o e-mail. Tente novamente.';
      }
    );
  }

  closeModal() {
    this.close.emit();
  }
}
