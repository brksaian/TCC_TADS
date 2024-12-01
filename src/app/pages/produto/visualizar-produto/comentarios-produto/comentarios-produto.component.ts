import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Avaliacao } from '../../../../shared/interface';

@Component({
  selector: 'app-comentarios-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comentarios-produto.component.html',
})
export class ComentariosProdutoComponent {
  @Input() comentarios: Avaliacao[] = [];
}
