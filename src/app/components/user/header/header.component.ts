import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faChartBar, faDoorOpen, faSearch, faSignInAlt, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;

  // Definir os ícones do Font Awesome
  faBars = faBars;
  faTimes = faTimes;
  faSearch = faSearch;
  faChartBar = faChartBar;
  faSignInAlt = faSignInAlt;
  faDoorOpen = faDoorOpen;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
