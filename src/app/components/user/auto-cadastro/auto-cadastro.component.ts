import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-cadastro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auto-cadastro.component.html',
  styleUrl: './auto-cadastro.component.css'
})
export class AutoCadastroComponent {
  // Variável para controlar o perfil selecionado
  selectedProfile: string = 'usuario'; // Por padrão, o perfil será 'usuario'

  // Função para alterar o perfil
  selectProfile(profile: string) {
    this.selectedProfile = profile;
  }
}
