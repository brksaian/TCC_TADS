import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil-web-conta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './perfil-web-conta.component.html',
  styleUrl: './perfil-web-conta.component.css',
})
export class PerfilWebContaComponent {
  contaForm: FormGroup;
  mudarSenha: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contaForm = this.fb.group({
      nome: ['Jose', [Validators.required, Validators.minLength(2)]],
      sobrenome: ['Maria', [Validators.required, Validators.minLength(2)]],
      email: [
        { value: 'josemaria@gmail.com', disabled: true },
        [Validators.required, Validators.email],
      ],
      senha: ['', [Validators.minLength(8)]],
      confirmarSenha: ['', [Validators.minLength(8)]],
    });
  }

  toggleMudarSenha(): void {
    this.mudarSenha = !this.mudarSenha;
  }

  salvar(): void {
    if (this.contaForm.valid) {
      console.log('Dados salvos:', this.contaForm.getRawValue());
    } else {
      console.log('Formulário inválido');
    }
  }
}
