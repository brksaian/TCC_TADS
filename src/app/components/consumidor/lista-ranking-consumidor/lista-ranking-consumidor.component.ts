import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Consumidor } from '../../../shared/interface';

@Component({
  selector: 'app-lista-ranking-consumidor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-ranking-consumidor.component.html',
  styleUrl: './lista-ranking-consumidor.component.css'
})
export class ListaRankingConsumidorComponent {
  @Input() users: Consumidor[] | null = [];
}
