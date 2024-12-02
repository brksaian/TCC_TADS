import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  HeaderAdministradorComponent,
  NavBarAdministradorComponent,
} from '../../../components/administrador';
import { FooterComponent } from '../../../components/shared';

@Component({
  selector: 'app-administrador-layout',
  standalone: true,
  imports: [
    RouterModule,
    FooterComponent,
    NavBarAdministradorComponent,
    HeaderAdministradorComponent,
    CommonModule,
  ],
  templateUrl: './administrador-layout.component.html',
  styleUrls: ['./administrador-layout.component.css'],
})
export class AdministradorLayoutComponent {
  menuVisible = false; // Controla a visibilidade da navbar

  // Alterna a visibilidade do menu
  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }
}
