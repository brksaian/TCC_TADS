import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { HeaderEstabelecimentoComponent } from '../header-estabelecimento';

@Component({
  selector: 'app-promocoes-estabelecimento',
  standalone: true,
  imports: [HeaderEstabelecimentoComponent],
  templateUrl: './promocoes-estabelecimento.component.html',
  styleUrls: ['./promocoes-estabelecimento.component.css']
})
export class PromocoesEstabelecimentoComponent {
  constructor(private router: Router) {}

  cadastrarPromocao() {
    this.router.navigate(['promocao/nova-promocao']);
  }
}
