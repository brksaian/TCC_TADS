import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-visualizar-estabelecimento',
  standalone: true,
  imports: [],
  templateUrl: './header-visualizar-estabelecimento.component.html',
  styleUrl: './header-visualizar-estabelecimento.component.css',
})
export class HeaderVisualizarEstabelecimentoComponent implements OnInit {
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
    this.router.navigate(['estabelecimento/visualizar/promocoes']);
  }

  goToEnderecos() {
    this.selectedOption = 'enderecos';
    this.router.navigate(['estabelecimento/visualizar/enderecos']);
  }
}
