import {  Component, computed, Input, signal,HostListener, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderAdministradorComponent } from '../header-administrador/header-administrador.component';
import { ListarProdutosSemImagemComponent } from '../produtos/listar-produtos-sem-imagem/listar-produtos-sem-imagem.component';
import { ListarProdutosSemCategoriaComponent } from '../produtos/listar-produtos-sem-categoria/listar-produtos-sem-categoria.component';

@Component({
  selector: 'app-home-administrador',
  standalone: true,
  imports: [ListarProdutosSemImagemComponent,ListarProdutosSemCategoriaComponent,CommonModule,HeaderAdministradorComponent],
  templateUrl: './home-administrador.component.html',
  styleUrl: './home-administrador.component.css'
})
export class HomeAdministradorComponent implements OnInit {
constructor() { }

ngOnInit(): void {
  // Pode adicionar qualquer lógica que precise inicializar na montagem do componente.
}

}