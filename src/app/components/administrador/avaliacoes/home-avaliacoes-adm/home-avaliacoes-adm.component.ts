import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { NavBarAdministradorComponent } from '../../nav-bar-administrador/nav-bar-administrador.component';

@Component({
  selector: 'app-home-avaliacoes-adm', 
  standalone: true,
  imports: [CommonModule, NavBarAdministradorComponent, RouterModule],
  templateUrl: './home-avaliacoes-adm.component.html',
  styleUrls: ['./home-avaliacoes-adm.component.css']
})
export class HomeAvaliacoesADMComponent {  

  menuVisible = false;

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }
}
