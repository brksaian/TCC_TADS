import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarAdministradorComponent } from '../../nav-bar-administrador/nav-bar-administrador.component';
import { HeaderAdministradorComponent } from '../../header-administrador/header-administrador.component';
import { CardAvaliacaoADMComponent } from '../card-avaliacao-adm/card-avaliacao-adm.component';

@Component({
  selector: 'app-home-avaliacoes-adm',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderAdministradorComponent,CardAvaliacaoADMComponent],
  templateUrl: './home-avaliacoes-adm.component.html',
  styleUrls: ['./home-avaliacoes-adm.component.css']
})

  export class HomeAvaliacoesADMComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
      // Lógica inicial, se necessário
    }
  }
