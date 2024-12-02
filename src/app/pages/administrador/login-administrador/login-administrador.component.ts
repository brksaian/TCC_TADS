import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services';

@Component({
  selector: 'app-login-administrador',
  standalone: true,
  imports: [],
  templateUrl: './login-administrador.component.html',
  styleUrls: ['./login-administrador.component.css'],
})
export class LoginAdministradorComponent {
  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/administrador']);
    }
  }

  onEntrar() {
    // Lógica de autenticação aqui, se necessário
    this.authService.login('fakeToken', 'ADMIN');
    this.router.navigate(['/administrador']);
  }
}
