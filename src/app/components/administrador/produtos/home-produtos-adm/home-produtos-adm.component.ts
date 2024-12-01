import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { NavBarAdministradorComponent } from '../../nav-bar-administrador/nav-bar-administrador.component';

@Component({
  selector: 'app-home-produtos-adm',  // Alterado para home-produtos-adm
  standalone: true,
  imports: [CommonModule, NavBarAdministradorComponent, RouterModule],
  templateUrl: './home-produtos-adm.component.html',
  styleUrls: ['./home-produtos-adm.component.css']
})
export class HomeProdutosADMComponent {  // Alterado para HomeProdutosADMComponent

  menuVisible = false;

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }
}
