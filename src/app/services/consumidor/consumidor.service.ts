import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumidor, ConsumidorRank } from '../../shared/interface';

@Injectable({
  providedIn: 'root'
})
export class ConsumidorService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  private apiRankingUrl = 'http://localhost:3000/usuarioxranking';

  getTop3Users(): Observable<ConsumidorRank[]> {
    return this.http.get<ConsumidorRank[]>(`${this.apiRankingUrl}?_sort=pontos&_order=desc&_limit=3`);
  }

  getOtherUsers(): Observable<ConsumidorRank[]> {
    return this.http.get<ConsumidorRank[]>(`${this.apiRankingUrl}?_sort=pontos&_order=desc&_start=3`);
  }

  getSeguidores(): Observable<Consumidor[]> {
    return this.http.get<Consumidor[]>(this.apiUrl);
  }

  getSeguindo(): Observable<Consumidor[]> {
    return this.http.get<Consumidor[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<Consumidor[]> {
    return this.http.get<Consumidor[]>(`${this.apiUrl}?id=${id}`);
  }
}
