import { Component } from '@angular/core';
import { NavBarAdministradorComponent } from '../nav-bar-administrador/nav-bar-administrador.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-administrador',
  standalone: true,
  imports: [NavBarAdministradorComponent,CommonModule], 
  templateUrl: './header-administrador.component.html',
  styleUrls: ['./header-administrador.component.css']
})
export class HeaderAdministradorComponent {
  menuVisible = false; // Controla a visibilidade do menu

  // Método para alternar a visibilidade do menu
  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }
}
