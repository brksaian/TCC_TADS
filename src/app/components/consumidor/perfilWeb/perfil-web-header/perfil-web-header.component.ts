import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

export interface PerfilWebHeaderTab {
  name: string;
  redirectUrl: string;
}

@Component({
  selector: 'app-perfil-web-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-web-header.component.html',
  styleUrl: './perfil-web-header.component.css',
})
export class PerfilWebHeaderComponent {
  @Output() tabSelected = new EventEmitter<string>();

  @Input() fLogado: boolean = false;

  tabs: PerfilWebHeaderTab[] = [
    { name: 'Favoritos', redirectUrl: 'favoritos' },
    { name: 'Notas', redirectUrl: 'notas' },
    { name: 'Seguindo', redirectUrl: 'seguindo' },
    { name: 'Seguidores', redirectUrl: 'seguidores' },
    { name: 'Notificações', redirectUrl: 'notificacoes' },
    { name: 'Conta', redirectUrl: 'conta' },
  ];
  guestTabs: PerfilWebHeaderTab[] = [
    { name: 'Avaliações', redirectUrl: 'avaliacoes' },
    { name: 'Seguindo', redirectUrl: 'seguindo' },
    { name: 'Seguidores', redirectUrl: 'seguidores' },
  ];

  activeTab: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.activeTab = (
      this.fLogado ? this.tabs[0].name : this.guestTabs[0].name
    ).toLowerCase();
  }

  selectTab(tab: string) {
    const sanitizedTab = tab.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    this.activeTab = sanitizedTab;

    this.tabSelected.emit(sanitizedTab);

    this.router.navigate(['/consumidor/perfil', sanitizedTab]);
  }

  getVisibleTabs(): PerfilWebHeaderTab[] {
    return this.fLogado ? this.tabs : this.guestTabs;
  }
}
