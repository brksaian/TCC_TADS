import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categoria } from '../../../shared/interface';

@Component({
  selector: 'app-card-categoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-categoria.component.html',
  styleUrl: './card-categoria.component.css'
})
export class CardCategoriaComponent {
      @Input() categoria!: Categoria;
}
