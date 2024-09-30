import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estabelecimento } from '../../shared/interface';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {
  private apiUrl = 'http://localhost:3000/estabelecimentos';

  constructor(private http: HttpClient) {}

  getEstabelecimentos(): Observable<Estabelecimento[]> {
    return this.http.get<Estabelecimento[]>(this.apiUrl);
  }

  getEstabelecimentoById(id: number): Observable<Estabelecimento> {
    return this.http.get<Estabelecimento>(`${this.apiUrl}/${id}`);
  }

  createEstabelecimento(estabelecimento: Estabelecimento): Observable<Estabelecimento> {
    return this.http.post<Estabelecimento>(this.apiUrl, estabelecimento);
  }

  updateEstabelecimento(id: number, estabelecimento: Estabelecimento): Observable<Estabelecimento> {
    return this.http.put<Estabelecimento>(`${this.apiUrl}/${id}`, estabelecimento);
  }

  deleteEstabelecimento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
