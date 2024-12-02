import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ListarProdutosSemCategoriaComponent } from '../produtos/listar-produtos-sem-categoria/listar-produtos-sem-categoria.component';
import { ListarProdutosSemImagemComponent } from '../produtos/listar-produtos-sem-imagem/listar-produtos-sem-imagem.component';

@Component({
  selector: 'app-home-administrador',
  standalone: true,
  imports: [
    ListarProdutosSemImagemComponent,
    ListarProdutosSemCategoriaComponent,
    CommonModule,
  ],
  templateUrl: './home-administrador.component.html',
  styleUrl: './home-administrador.component.css',
})
export class HomeAdministradorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Pode adicionar qualquer lógica que precise inicializar na montagem do componente.
  }
}
