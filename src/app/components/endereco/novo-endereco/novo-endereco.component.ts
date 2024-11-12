import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-novo-endereco',
  standalone: true,
  imports: [], 
  templateUrl: './novo-endereco.component.html',
  styleUrls: ['./novo-endereco.component.css'] 
})
export class NovoEnderecoComponent {
  constructor(private router: Router) {} 

  voltar() {
    this.router.navigate(['estabelecimento/enderecos-estabelecimento']);
  }
}
