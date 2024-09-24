import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services';
import { ModalAvisoComponent } from '../../shared/modal-aviso/modal-aviso.component';
import { ForgotPasswordModalComponent } from "../forgot-password-modal/forgot-password-modal.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, ModalAvisoComponent, RouterModule, ForgotPasswordModalComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  senha: string = '';

  // Variáveis para o modal
  mostrarModal: boolean = false;
  tipoModal: 'sucesso' | 'erro' | 'atencao' = 'sucesso';
  tituloModal: string = '';
  mensagemModal: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onLogin() {
    this.userService.login(this.email, this.senha).subscribe(
      (response) => {
        this.exibirModal('sucesso', 'Login bem-sucedido', 'Você foi autenticado com sucesso.');
        setTimeout(() => {
          this.router.navigate(['/home']);  // Redireciona para /home após login bem-sucedido
        }, 5000);  // Redireciona após 5 segundos
      },
      (error) => {
        if (error.status === 401) {
          this.exibirModal('erro', 'Acesso Negado', 'Credenciais inválidas. Verifique seu email e senha.');
        } else {
          this.exibirModal('erro', 'Erro ao Logar', 'Ocorreu um erro inesperado. Tente novamente mais tarde.');
        }
      }
    );
  }

  // Método para exibir a modal
  exibirModal(tipo: 'sucesso' | 'erro' | 'atencao', titulo: string, mensagem: string) {
    this.tipoModal = tipo;
    this.tituloModal = titulo;
    this.mensagemModal = mensagem;
    this.mostrarModal = true;
  }
}
