import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterEstabelecimentoComponent, HeaderEstabelecimentoComponent } from '../../../components/estabelecimento';

@Component({
  selector: 'app-estabelecimento-layout',
  standalone: true,
  imports: [HeaderEstabelecimentoComponent, FooterEstabelecimentoComponent, RouterModule],
  templateUrl: './estabelecimento-layout.component.html',
  styleUrl: './estabelecimento-layout.component.css'
})
export class EstabelecimentoLayoutComponent {

}
