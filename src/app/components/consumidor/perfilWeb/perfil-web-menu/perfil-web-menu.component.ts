import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-perfil-web-menu',
  standalone: true,
  imports: [],
  templateUrl: './perfil-web-menu.component.html',
  styleUrl: './perfil-web-menu.component.css',
})
export class PerfilWebMenuComponent {
  @Input() user?: { nome: string; imagem: string };
}
