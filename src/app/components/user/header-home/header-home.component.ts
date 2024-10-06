import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-home',
  standalone: true,
  imports: [],
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.css'
})
export class HeaderHomeComponent {

  constructor(private router: Router) {}
  goToBuscarProdutos() {
    this.router.navigate(['/buscarProdutos']);
  }
}
