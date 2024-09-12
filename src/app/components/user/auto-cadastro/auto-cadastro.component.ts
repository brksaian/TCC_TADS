import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalAvisoComponent } from '../../shared/modal-aviso/modal-aviso.component';

@Component({
  selector: 'app-auto-cadastro',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule, ModalAvisoComponent],
  templateUrl: './auto-cadastro.component.html',
  styleUrl: './auto-cadastro.component.css'
})
export class AutoCadastroComponent {
  // Variável para controlar o perfil selecionado
  selectedProfile: string = 'usuario'; // Por padrão, o perfil será 'usuario'

  // Função para alterar o perfil
  selectProfile(profile: string) {
    this.selectedProfile = profile;
  }

  nome: string = '';
  email: string = '';
  senha: string = '';

  // Variáveis para o modal
  mostrarModal: boolean = false;
  tipoModal: 'sucesso' | 'erro' | 'atencao' = 'sucesso';
  tituloModal: string = '';
  mensagemModal: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onAutoCadastro() {
    this.userService.autoCadastro(this.nome, this.email, this.senha).subscribe(
      (response) => {
        this.exibirModal('sucesso', 'Cadastro bem-sucedido', 'Sua conta foi criada com sucesso.');
        setTimeout(() => {
          this.router.navigate(['/login']); // Redireciona para a página de login após 10 segundos
        }, 10000); // Tempo para redirecionar após o fechamento da modal
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
}
