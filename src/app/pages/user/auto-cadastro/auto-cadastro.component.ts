import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ModalAvisoComponent } from '../../../components/shared/modal-aviso/modal-aviso.component';
import { UserService } from '../../../services';

@Component({
  selector: 'app-auto-cadastro',
  standalone: true,
  templateUrl: './auto-cadastro.component.html',
  styleUrls: ['./auto-cadastro.component.css'],
  imports: [ModalAvisoComponent, FormsModule, CommonModule, RouterModule],
})
export class AutoCadastroComponent {
  selectedProfile: string = 'usuario';
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  cnpj: string = '';

  formSubmitted: boolean = false; // Rastrea se o formulário foi enviado
  mostrarModal: boolean = false;
  tipoModal: 'sucesso' | 'erro' | 'atencao' = 'sucesso';
  tituloModal: string = '';
  mensagemModal: string = '';

  constructor(private userService: UserService, private router: Router) {}

  // Método para validação do email
  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Método para validação da senha
  validarSenha(senha: string): boolean {
    const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return senhaRegex.test(senha);
  }

  // Método para exibir mensagens de erro
  exibirModal(
    tipo: 'sucesso' | 'erro' | 'atencao',
    titulo: string,
    mensagem: string
  ) {
    this.tipoModal = tipo;
    this.tituloModal = titulo;
    this.mensagemModal = mensagem;
    this.mostrarModal = true;
  }

  // Método para cadastro
  onAutoCadastro() {
    this.formSubmitted = true; // Marca o formulário como enviado

    // Validações
    if (!this.nome.trim()) {
      this.exibirModal(
        'erro',
        'Erro de validação',
        'O campo Nome é obrigatório.'
      );
      return;
    }

    if (this.nome.split(' ').length < 2) {
      this.exibirModal(
        'erro',
        'Erro de validação',
        'O usuário deve fornecer tanto um nome quanto um sobrenome.'
      );
      return;
    }

    if (!this.validarEmail(this.email)) {
      this.exibirModal(
        'erro',
        'Erro de validação',
        'O e-mail informado não é válido.'
      );
      return;
    }

    if (!this.validarSenha(this.senha)) {
      this.exibirModal(
        'erro',
        'Erro de validação',
        'A senha deve conter no mínimo 8 caracteres, incluindo letras e números.'
      );
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      this.exibirModal('erro', 'Erro de validação', 'As senhas não coincidem.');
      return;
    }

    const perfil = this.selectedProfile;

    // Chamada ao serviço para cadastro
    this.userService
      .autoCadastro(this.nome, this.email, this.senha, perfil, this.cnpj)
      .subscribe(
        (response) => {
          this.exibirModal(
            'sucesso',
            'Cadastro bem-sucedido',
            'Sua conta foi criada com sucesso.'
          );
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3000);
        },
        (error) => {
          this.exibirModal(
            'erro',
            'Erro no cadastro',
            'Ocorreu um erro ao criar a conta. Tente novamente.'
          );
        }
      );
  }

  // Alterar o perfil do usuário
  selectProfile(profile: string) {
    this.selectedProfile = profile;
  }
}
