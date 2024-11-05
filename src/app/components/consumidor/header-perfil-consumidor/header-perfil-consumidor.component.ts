import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../shared/interface';
import { UserService } from '../../../services';

@Component({
  selector: 'app-header-perfil-consumidor',
  standalone: true,
  imports: [],
  templateUrl: './header-perfil-consumidor.component.html',
  styleUrls: ['./header-perfil-consumidor.component.css']
})
export class HeaderPerfilConsumidorComponent implements OnInit {
  usuarioLogado!: Usuario | null;
  notasCadastradas!: number;
  produtosCadastrados!: number;
  avaliacoes!: number;
  seguindo!: number;
  seguidores!: number;

  constructor(private usuarioService: UserService) {}

  ngOnInit(): void {
    const usuario = this.usuarioService.getUsuarioLogado();

    if (usuario) {
      this.usuarioLogado = usuario;
      this.usuarioService.getInformacoesPerfil(usuario.id).subscribe((informacoes: any) => {
        this.notasCadastradas = informacoes.notasCadastradas;
        this.produtosCadastrados = informacoes.produtosCadastrados;
        this.avaliacoes = informacoes.avaliacoes;
        this.seguindo = informacoes.seguindo;
        this.seguidores = informacoes.seguidores;
      });
    } else {
      console.error('Usuário não está logado');
    }
  }

  seguir(): void {
    if (this.usuarioLogado) {
      this.usuarioService.seguirUsuario(this.usuarioLogado.id).subscribe(() => {
        console.log('Agora você está seguindo este usuário!');
      });
    }
  }
}
