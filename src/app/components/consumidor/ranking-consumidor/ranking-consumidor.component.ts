import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsumidorService, UserService } from '../../../services';
import { Consumidor } from '../../../shared/interface';
import { ListaRankingConsumidorComponent } from "../lista-ranking-consumidor/lista-ranking-consumidor.component";
import { Top3UsersComponent } from "../top3-users/top3-users.component";

@Component({
  selector: 'app-ranking-consumidor',
  standalone: true,
  imports: [Top3UsersComponent, ListaRankingConsumidorComponent, CommonModule],
  templateUrl: './ranking-consumidor.component.html',
  styleUrl: './ranking-consumidor.component.css'
})
export class RankingConsumidorComponent {
  top3Users$: Observable<Consumidor[]>;
  otherUsers$: Observable<Consumidor[]>;

  constructor(private consumidorService: ConsumidorService) {
    this.top3Users$ = this.consumidorService.getTop3Users();
    this.otherUsers$ = this.consumidorService.getOtherUsers();
  }
}
