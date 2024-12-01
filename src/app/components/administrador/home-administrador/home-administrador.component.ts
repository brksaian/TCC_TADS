import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosselCategoriasComponent } from '../../categoria/carrossel-categorias';
import { HeaderAdministradorComponent } from '../header-administrador/header-administrador.component';

@Component({
  selector: 'app-home-administrador',
  standalone: true,
  imports: [CarrosselCategoriasComponent,CommonModule,HeaderAdministradorComponent],
  templateUrl: './home-administrador.component.html',
  styleUrl: './home-administrador.component.css'
})
export class HomeAdministradorComponent implements OnInit {
  categorias = [{
    id: 1,
    nome: 'Alimentos',
    imagem: 'assets/Nota Social.jpg'
  },
  {
    id: 2,
    nome: 'Massas',
    imagem: 'assets/Nota Social.jpg'
  },
  {
    id: 3,
    nome: 'Higiene',
    imagem: 'assets/Nota Social.jpg'
  },
  {
    id: 4,
    nome: 'Limpeza',
    imagem: 'assets/Nota Social.jpg'
  },
  {
    id: 5,
    nome: 'Bebidas',
    imagem: 'assets/Nota Social.jpg'
  },
  {
    id: 6,
    nome: 'Carnes',
    imagem: 'assets/Nota Social.jpg'
  },
  {
    id: 7,
    nome: 'Laticínios',
    imagem: 'assets/Nota Social.jpg'
  },
  {
    id: 8,
    nome: 'Congelados',
    imagem: 'assets/Nota Social.jpg'
  },
  {
    id: 9,
    nome: 'Hortifruti',
    imagem: 'assets/images/categorias/hortifruti.jpg'
  },
  {
    id: 10,
    nome: 'Padaria e Confeitaria',
    imagem: 'assets/Nota Social.jpg'
  },
  {
    id: 11,
    nome: 'Bebê',
    imagem: 'assets/Nota Social.jpg'
  },
  {
    id: 12,
    nome: 'Petshop',
    imagem: 'assets/Nota Social.jpg'
  },
  {
    id: 13,
    nome: 'Saúde e Beleza',
    imagem: 'assets/Nota Social.jpg'
  },
  {
    id: 14,
    nome: 'Papelaria',
    imagem: 'assets/Nota Social.jpg'
  },
  {
    id: 15,
    nome: 'Eletrônicos',
    imagem: 'assets/Nota Social.jpg'
  },
  {
    id: 16,
    nome: 'Utilidades Domésticas',
    imagem: 'assets/Nota Social.jpg'
  },
  {
    id: 17,
    nome: 'Automotivo',
    imagem: 'assets/Nota Social.jpg'
  },
  {
    id: 18,
    nome: 'Brinquedos',
    imagem: 'assets/Nota Social.jpg'
  },
  {
  id: 19,
    nome: 'Bebidas Alcoólicas',
    imagem: 'assets/Nota Social.jpg'
  }
  
];

constructor() { }

ngOnInit(): void {
  // Pode adicionar qualquer lógica que precise inicializar na montagem do componente.
}

}