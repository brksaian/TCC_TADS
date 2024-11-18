import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faBuilding,
  faChartBar,
  faHeart,
  faSearch,
  faShoppingCart,
  faSignOutAlt,
  faTimes,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-consumidor',
  standalone: true,
  imports: [RouterModule, CommonModule, FontAwesomeModule],
  templateUrl: './header-consumidor.component.html',
  styleUrl: './header-consumidor.component.css',
})
export class HeaderConsumidorComponent {
  menuOpen = false;

  // Ícones FontAwesome
  faBars = faBars;
  faTimes = faTimes;
  faSearch = faSearch;
  faChartBar = faChartBar;
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
  faBuilding = faBuilding;
  faSignOutAlt = faSignOutAlt;
  faUserCircle = faUserCircle;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
