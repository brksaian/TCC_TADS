import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Avaliacao } from '../../../shared/interface';

@Component({
  selector: 'app-visualizar-avaliacao-consumidor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visualizar-avaliacao-consumidor.component.html',
  styleUrl: './visualizar-avaliacao-consumidor.component.css'
})
export class VisualizarAvaliacaoConsumidorComponent {
  @Input() avaliacao!: Avaliacao;
}
