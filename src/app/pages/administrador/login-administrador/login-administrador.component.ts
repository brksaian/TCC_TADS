import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, UserService } from '../../../services';

@Component({
  selector: 'app-login-administrador',
  standalone: true,
  templateUrl: './login-administrador.component.html',
  styleUrls: ['./login-administrador.component.css'],
  imports: [FormsModule, CommonModule],
})
export class LoginAdministradorComponent {
  email: string = '';
  senha: string = '';
  errorMessage: string | null = null;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {
    // Redireciona se o usuário já estiver logado
    if (this.authService.isLoggedIn()) {
      this.router.navigate([this.authService.getHomeRoute()]);
    }
  }

  onEntrar(): void {
    this.errorMessage = null; // Limpa mensagens de erro anteriores

    this.userService.login(this.email, this.senha).subscribe({
      next: (token) => {
        if (token) {
          // Salva o token e define o papel do usuário no AuthService
          this.authService.login(token, 'ADMIN');

          try {
            // Decodifica o token JWT manualmente
            const payload = this.decodeJWT(token);
            console.log('Token Decodificado:', payload);
          } catch (error) {
            console.error('Erro ao decodificar o token:', error);
          }

          this.router.navigate([this.authService.getHomeRoute()]);
        } else {
          this.errorMessage = 'Falha no login. Verifique suas credenciais.';
        }
      },
      error: (error) => {
        this.errorMessage = 'Erro ao processar o login. Tente novamente.';
        console.error('Erro ao realizar login:', error);
      },
    });
  }

  private decodeJWT(token: string): any {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Token JWT inválido');
    }

    const base64Payload = parts[1];
    const payload = atob(base64Payload.replace(/-/g, '+').replace(/_/g, '/')); // Decodifica Base64
    return JSON.parse(payload); // Converte o JSON decodificado em objeto
  }
}
