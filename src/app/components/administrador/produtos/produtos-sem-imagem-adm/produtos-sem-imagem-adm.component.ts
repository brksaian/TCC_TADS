import { Component } from '@angular/core';
import { HeaderAdministradorComponent } from '../../header-administrador/header-administrador.component';
import { ListarProdutosSemImagemComponent } from '../listar-produtos-sem-imagem/listar-produtos-sem-imagem.component';

@Component({
  selector: 'app-produtos-sem-imagem-adm',
  standalone: true,
  imports: [HeaderAdministradorComponent,ListarProdutosSemImagemComponent],
  templateUrl: './produtos-sem-imagem-adm.component.html',
  styleUrls: ['./produtos-sem-imagem-adm.component.css']
})
export class ProdutosSemImagemAdmComponent {

}
