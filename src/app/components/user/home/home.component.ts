import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../../../shared/interface';
import { CarrosselProdutosComponent } from '../../produto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrosselProdutosComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  produtos: Produto[] = [
    {
      nome: 'Arroz TP1 Buriti',
      precoMedio: 6.69,
      imagem: 'assets/Nota Social.jpg'//'assets/images/arroz-buriti.png'
    },
    {
      nome: 'Feijão Preto',
      precoMedio: 4.99,
      imagem: 'assets/Nota Social.jpg' //'assets/images/feijao-preto.png'
    },
    {
      nome: 'Azeite de Oliva Extra Virgem',
      precoMedio: 19.99,
      imagem: 'assets/Nota Social.jpg' //'assets/images/azeite-oliva.png'
    },
    {
      nome: 'Arroz TP1 Buriti',
      precoMedio: 6.69,
      imagem: 'assets/Nota Social.jpg'//'assets/images/arroz-buriti.png'
    },
    {
      nome: 'Feijão Preto',
      precoMedio: 4.99,
      imagem: 'assets/Nota Social.jpg' //'assets/images/feijao-preto.png'
    },
    {
      nome: 'Azeite de Oliva Extra Virgem',
      precoMedio: 19.99,
      imagem: 'assets/Nota Social.jpg' //'assets/images/azeite-oliva.png'
    },
    {
      nome: 'Arroz TP1 Buriti',
      precoMedio: 6.69,
      imagem: 'assets/Nota Social.jpg'//'assets/images/arroz-buriti.png'
    },
    {
      nome: 'Feijão Preto',
      precoMedio: 4.99,
      imagem: 'assets/Nota Social.jpg' //'assets/images/feijao-preto.png'
    },
    {
      nome: 'Azeite de Oliva Extra Virgem',
      precoMedio: 19.99,
      imagem: 'assets/Nota Social.jpg' //'assets/images/azeite-oliva.png'
    },
    {
      nome: 'Arroz TP1 Buriti',
      precoMedio: 6.69,
      imagem: 'assets/Nota Social.jpg'//'assets/images/arroz-buriti.png'
    },
    {
      nome: 'Feijão Preto',
      precoMedio: 4.99,
      imagem: 'assets/Nota Social.jpg' //'assets/images/feijao-preto.png'
    },
    {
      nome: 'Azeite de Oliva Extra Virgem',
      precoMedio: 19.99,
      imagem: 'assets/Nota Social.jpg' //'assets/images/azeite-oliva.png'
    },
  ];
}
