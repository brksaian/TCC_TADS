import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderEstabelecimentoComponent } from '../../../components/estabelecimento';
import { FooterComponent } from '../../../components/shared';

@Component({
  selector: 'app-estabelecimento-layout',
  standalone: true,
  imports: [HeaderEstabelecimentoComponent, FooterComponent, RouterModule],
  templateUrl: './estabelecimento-layout.component.html',
  styleUrl: './estabelecimento-layout.component.css',
})
export class EstabelecimentoLayoutComponent {}
