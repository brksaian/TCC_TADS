import { Component } from '@angular/core';
import { HeaderAdministradorComponent } from '../../header-administrador/header-administrador.component';
import { ListarProdutosSemCategoriaComponent } from '../listar-produtos-sem-categoria/listar-produtos-sem-categoria.component';

@Component({
  selector: 'app-produtos-sem-categoria-adm',
  standalone: true,
  imports: [HeaderAdministradorComponent,ListarProdutosSemCategoriaComponent],
  templateUrl: './produtos-sem-categoria-adm.component.html',
  styleUrls: ['./produtos-sem-categoria-adm.component.css']
})
export class ProdutosSemCategoriaAdmComponent {

}
