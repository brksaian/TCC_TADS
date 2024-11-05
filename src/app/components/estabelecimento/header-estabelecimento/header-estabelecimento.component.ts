import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-estabelecimento',
  standalone: true,
  imports: [],
  templateUrl: './header-estabelecimento.component.html',
  styleUrls: ['./header-estabelecimento.component.css']
})
export class HeaderEstabelecimentoComponent implements OnInit {
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
