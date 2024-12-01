import { Component } from '@angular/core';
import { HeaderVisualizarEstabelecimentoComponent } from "../../../../components/estabelecimento/visualizar-estabelecimentos/header-visualizar-estabelecimento/header-visualizar-estabelecimento.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-visualizar-estabelecimento-layout',
  standalone: true,
  imports: [HeaderVisualizarEstabelecimentoComponent, RouterModule],
  templateUrl: './visualizar-estabelecimento-layout.component.html',
  styleUrl: './visualizar-estabelecimento-layout.component.css',
})
export class VisualizarEstabelecimentoLayoutComponent {}
