import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Consumidor } from '../../../shared/interface';

@Component({
  selector: 'app-card-consumidor-ranking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-consumidor-ranking.component.html',
  styleUrl: './card-consumidor-ranking.component.css'
})
export class CardConsumidorRankingComponent {
  @Input() user: Consumidor | null = null;
}
