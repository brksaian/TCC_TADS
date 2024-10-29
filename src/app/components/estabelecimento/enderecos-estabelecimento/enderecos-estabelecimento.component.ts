import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar o Router
import { HeaderEstabelecimentoComponent } from '../header-estabelecimento';

@Component({
  selector: 'app-enderecos-estabelecimento',
  standalone: true,
  imports: [HeaderEstabelecimentoComponent],
  templateUrl: './enderecos-estabelecimento.component.html',
  styleUrls: ['./enderecos-estabelecimento.component.css']
})
export class EnderecosEstabelecimentoComponent {

  constructor(private router: Router) {}

  cadastrarEndereco() {
    this.router.navigate(['endereco/novo-endereco']);
  }
}
