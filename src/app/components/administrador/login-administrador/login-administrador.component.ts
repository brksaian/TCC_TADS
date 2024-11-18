import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-administrador',
  standalone: true,
  imports: [],
  templateUrl: './login-administrador.component.html',
  styleUrls: ['./login-administrador.component.css']
})
export class LoginAdministradorComponent {
  constructor(private router: Router) {}

  onEntrar() {
    // Lógica de autenticação aqui, se necessário
    this.router.navigate(['/administrador/home-administrador']);
  }
}
