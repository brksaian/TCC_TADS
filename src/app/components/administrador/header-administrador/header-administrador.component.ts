import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAngleDown,
  faBars,
  faSignOutAlt,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../services';

@Component({
  selector: 'app-header-administrador',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header-administrador.component.html',
  styleUrls: ['./header-administrador.component.css'],
})
export class HeaderAdministradorComponent {
  menuVisible = false; // Controla a visibilidade do menu
  sairMenuVisible = false;

  @Output() toggleMenu = new EventEmitter<void>();

  // Ícones FontAwesome
  faBars = faBars;
  faUserCircle = faUserCircle;
  faSignOutAlt = faSignOutAlt;
  faAngleDown = faAngleDown;

  constructor(private router: Router, private authService: AuthService) {}

  // Alterna visibilidade do menu "Sair"
  toggleSairMenu(): void {
    this.sairMenuVisible = !this.sairMenuVisible;
  }

  // Chama a lógica de logout
  deslogarAdmin() {
    this.authService.logout();
    this.router.navigate(['administrador/login-administrador']);
  }
}
