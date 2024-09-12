import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent, HeaderComponent } from './components/shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigido para styleUrls
})
export class AppComponent {
  title = 'Nota Social';

  constructor(private router: Router) {}

  // Verifica se a rota atual é de login ou registrar
  shouldHideHeaderFooter(): boolean {
    const currentRoute = this.router.url;
    return currentRoute === '/login' || currentRoute === '/registrar';
  }
}
