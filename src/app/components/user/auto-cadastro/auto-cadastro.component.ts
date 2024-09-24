import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services';
import { CnpjDirective, CpfDirective } from '../../../shared/directives';
import { ModalAvisoComponent } from '../../shared/modal-aviso/modal-aviso.component';

@Component({
  selector: 'app-auto-cadastro',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule, ModalAvisoComponent, CnpjDirective, CpfDirective],
  templateUrl: './auto-cadastro.component.html',
  styleUrls: ['./auto-cadastro.component.css']
})
export class AutoCadastroComponent {
  selectedProfile: string = 'usuario';
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';
  cnpj: string = '';

  mostrarModal: boolean = false;
  tipoModal: 'sucesso' | 'erro' | 'atencao' = 'sucesso';
  tituloModal: string = '';
  mensagemModal: string = '';

  constructor(private userService: UserService, private router: Router) {}

  // Método para cadastro
  onAutoCadastro() {
    if (this.senha !== this.confirmarSenha) {
      this.exibirModal('erro', 'Erro de validação', 'As senhas não coincidem.');
      return;
    }

    // Verifica o perfil e inclui o CPF ou CNPJ se necessário
    const perfil = this.selectedProfile;
    const cnpj = perfil === 'estabelecimento' ? this.cnpj : undefined;

    this.userService.autoCadastro(this.nome, this.email, this.senha, perfil, cnpj).subscribe(
      (response) => {
        this.exibirModal('sucesso', 'Cadastro bem-sucedido', 'Sua conta foi criada com sucesso.');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 10000);
      },
      (error) => {
        this.exibirModal('erro', 'Erro no cadastro', 'Ocorreu um erro ao criar a conta. Tente novamente.');
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

  // Função para alterar o perfil
  selectProfile(profile: string) {
    this.selectedProfile = profile;
  }
}
