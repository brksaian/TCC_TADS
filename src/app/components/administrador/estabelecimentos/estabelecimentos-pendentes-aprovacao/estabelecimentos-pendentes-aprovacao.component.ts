import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { HeaderAdministradorComponent } from '../../header-administrador/header-administrador.component';
import { CardEstabelecimentoAguardandoAprovacaoADMComponent } from '../card-estabelecimento-aguardando-aprovacao-adm/card-estabelecimento-aguardando-aprovacao-adm.component';

@Component({
  selector: 'app-estabelecimentos-pendentes-aprovacao',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderAdministradorComponent,CardEstabelecimentoAguardandoAprovacaoADMComponent],
  templateUrl: './estabelecimentos-pendentes-aprovacao.component.html',
  styleUrls: ['./estabelecimentos-pendentes-aprovacao.component.css']
})
export class EstabelecimentosPendentesAprovacaoComponent {
  constructor() { }
  
    ngOnInit(): void {
      // Lógica inicial, se necessário
    }
}