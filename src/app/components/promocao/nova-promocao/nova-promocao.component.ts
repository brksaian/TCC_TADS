import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nova-promocao',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nova-promocao.component.html',
  styleUrls: ['./nova-promocao.component.css'] 
})
export class NovaPromocaoComponent {
  // Inicie o array com dois produtos
  produtos: { nome: string; preco: string }[] = [
    { nome: '', preco: '' },
    { nome: '', preco: '' }
  ];

  constructor(private router: Router) {}

  // Método para navegar de volta
  voltar() {
    this.router.navigate(['estabelecimento/promocoes-estabelecimento']); 
  }

  // Método para adicionar um novo conjunto de campos
  adicionarProduto() {
    this.produtos.push({ nome: '', preco: '' });
  }
}
