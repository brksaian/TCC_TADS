import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar-administrador',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar-administrador.component.html',
  styleUrls: ['./nav-bar-administrador.component.css'],
})
export class NavBarAdministradorComponent {
  @Input() isMenuOpen = false; // Recebe a visibilidade do menu do componente pai
  @Output() toggleMenu = new EventEmitter<void>(); // Notifica o pai para alternar a visibilidade

  // Método para emitir o evento de alternar menu
  onToggleMenu(): void {
    this.toggleMenu.emit();
  }
}
