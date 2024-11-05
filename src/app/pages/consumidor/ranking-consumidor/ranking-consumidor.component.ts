import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsumidorService, UserService } from '../../../services';
import { Consumidor } from '../../../shared/interface';
import { ListaRankingConsumidorComponent, Top3UsersComponent } from '../../../components/consumidor';

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
