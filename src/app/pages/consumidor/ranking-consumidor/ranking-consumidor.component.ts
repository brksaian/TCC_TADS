import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ListaRankingConsumidorComponent, Top3UsersComponent } from '../../../components/consumidor';
import { ConsumidorService } from '../../../services';
import { Consumidor } from '../../../shared/interface';

@Component({
  selector: 'app-ranking-consumidor',
  standalone: true,
  imports: [Top3UsersComponent, ListaRankingConsumidorComponent, CommonModule],
  templateUrl: './ranking-consumidor.component.html',
  styleUrls: ['./ranking-consumidor.component.css'],
})
export class RankingConsumidorComponent implements OnInit {
  top3Users: Consumidor[] = [];
  otherUsers: Consumidor[] = [];

  constructor(private consumidorService: ConsumidorService) {}

  ngOnInit(): void {
    this.loadTop3Users();
    this.loadOtherUsers();
  }

  loadTop3Users(): void {
    this.consumidorService.getTop3Users()
      .pipe(
        switchMap((ranking) =>
          forkJoin(
            ranking.map(rank =>
              this.consumidorService.getUserById(rank.usuarioId).pipe(
                map(userArray => ({ ...userArray[0], pontos: rank.pontos })), // Acessa a posição 0 do array
                catchError(err => {
                  console.error(`Erro ao buscar usuário ${rank.usuarioId}`, err);
                  return of(null); // Retorna `null` caso o usuário não seja encontrado
                })
              )
            )
          )
        ),
        map(users => users.filter(user => user !== null) as Consumidor[]) // Remove `null` e garante o tipo `Consumidor[]`
      )
      .subscribe({
        next: (users) => {
          console.log(users);
          this.top3Users = users;
        },
        error: (err) => console.error('Erro ao buscar Top 3 usuários', err)
      });
  }

  loadOtherUsers(): void {
    this.consumidorService.getOtherUsers()
      .pipe(
        switchMap((ranking) =>
          forkJoin(
            ranking.map(rank =>
              this.consumidorService.getUserById(rank.usuarioId).pipe(
                map(user => ({ ...user[0], pontos: rank.pontos })),
                catchError(err => {
                  console.error(`Erro ao buscar usuário ${rank.usuarioId}`, err);
                  return of(null); // Retorna `null` caso o usuário não seja encontrado
                })
              )
            )
          )
        ),
        map(users => users.filter(user => user !== null) as Consumidor[]) // Remove `null` e garante o tipo `Consumidor[]`
      )
      .subscribe({
        next: (users) => {
          this.otherUsers = users;
        },
        error: (err) => console.error('Erro ao buscar outros usuários', err)
      });
  }

}
