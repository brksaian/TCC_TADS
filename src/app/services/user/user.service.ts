import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://api.exemplo.com'; // Substitua com a URL da sua API

  constructor(private http: HttpClient) {}

  // Método para login
  login(email: string, senha: string): Observable<any> {
    const url = `${this.apiUrl}/login`;
    const body = { email, senha };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, { headers });
  }

  // Método para autocadastro
  autoCadastro(nome: string, email: string, senha: string): Observable<any> {
    const url = `${this.apiUrl}/autocadastro`;
    const body = { nome, email, senha };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, { headers });
  }
}
