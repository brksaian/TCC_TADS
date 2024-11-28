import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Estabelecimento } from '../../../shared/interface'; 

@Component({
  selector: 'app-card-estabelecimento-adm',
  standalone: true,
  imports: [], 
  templateUrl: './card-estabelecimento-adm.component.html',
  styleUrl: './card-estabelecimento-adm.component.css' 
})
export class CardEstabelecimentoAdmComponent {
  @Input() estabelecimento!: Estabelecimento;

  constructor(private router: Router) {}

  goToDetails() {
    this.router.navigate(['/estabelecimento', this.estabelecimento.id]);  // Ajuste a navegação para o estabelecimento
  }
}
