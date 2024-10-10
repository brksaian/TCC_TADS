import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumidor } from '../../shared/interface';

@Injectable({
  providedIn: 'root'
})
export class ConsumidorService {
  private apiUrl = 'http://localhost:3000/consumidor';

  constructor(private http: HttpClient) {}

  getTop3Users(): Observable<Consumidor[]> {
    return this.http.get<Consumidor[]>(`${this.apiUrl}?_sort=rank&_order=asc&_limit=3`);
  }

  getOtherUsers(): Observable<Consumidor[]> {
    return this.http.get<Consumidor[]>(`${this.apiUrl}?_sort=rank&_order=asc&_start=3`);
  }
}
