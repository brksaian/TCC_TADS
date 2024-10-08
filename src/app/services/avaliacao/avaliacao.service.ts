import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Avaliacao } from '../../shared/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {
  private apiUrl = 'http://localhost:3000/avaliacoes';

  constructor(private http: HttpClient) {}

  salvarAvaliacao(avaliacao: Avaliacao): Observable<Avaliacao> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Avaliacao>(this.apiUrl, avaliacao, { headers });
  }
}
