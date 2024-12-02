import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
  selector: 'app-header-estabelecimento',
  standalone: true,
  imports: [RouterModule, CommonModule, FontAwesomeModule],
  templateUrl: './header-estabelecimento.component.html',
  styleUrls: ['./header-estabelecimento.component.css'],
})
export class HeaderEstabelecimentoComponent implements OnInit {
  menuOpen = false;

  // Ícones do Font Awesome
  faBars = faBars;
  faTimes = faTimes;
  faUserCircle = faUserCircle;
  faSearch = faSearch;
  faBuilding = faBuilding;
  faChartBar = faChartBar;
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
  faSignOutAlt = faSignOutAlt;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  selectedOption: string = 'promocoes';

  constructor(private router: Router) {}

  ngOnInit() {
    // Verificar a rota atual e definir a opção selecionada
    const currentRoute = this.router.url;
    if (currentRoute.includes('enderecos-estabelecimento')) {
      this.selectedOption = 'enderecos';
    } else {
      this.selectedOption = 'promocoes';
    }
  }

  goToPromocoes() {
    this.selectedOption = 'promocoes';
    this.router.navigate(['estabelecimento/promocoes-estabelecimento']);
  }

  goToEnderecos() {
    this.selectedOption = 'enderecos';
    this.router.navigate(['estabelecimento/enderecos-estabelecimento']);
  }
}
