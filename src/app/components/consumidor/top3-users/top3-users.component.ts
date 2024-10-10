import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Consumidor } from '../../../shared/interface';
import { CardConsumidorRankingComponent } from "../card-consumidor-ranking/card-consumidor-ranking.component";

@Component({
  selector: 'app-top3-users',
  standalone: true,
  imports: [CommonModule, FormsModule, CardConsumidorRankingComponent],
  templateUrl: './top3-users.component.html',
  styleUrl: './top3-users.component.css'
})
export class Top3UsersComponent {
  @Input() users: Consumidor[] | null = [];
}
