import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AutoCadastroResponse, ForgotPasswordResponse, LoginResponse, UserProduto, Usuario } from '../../shared/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/usuarios';
  private userProdutoApiUrl = 'http://localhost:3000/user_produto';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  updateUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/${id}`, usuario);
  }

  login(email: string, senha: string): Observable<LoginResponse> {
    const url = `${this.apiUrl}/login`;
    const body = { email, senha };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<LoginResponse>(url, body, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  autoCadastro(nome: string, email: string, senha: string, perfil: string, cnpj?: string): Observable<AutoCadastroResponse> {
    const url = `${this.apiUrl}/autocadastro`;

    const body = perfil === 'estabelecimento'
      ? { nome, email, senha, perfil, cnpj }
      : { nome, email, senha, perfil };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<AutoCadastroResponse>(url, body, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  forgotPassword(email: string): Observable<ForgotPasswordResponse> {
    const url = `${this.apiUrl}/forgot-password`;
    const body = { email };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<ForgotPasswordResponse>(url, body, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // ============================
  // Métodos de UserProduto (Favoritos)
  // ============================

  getUserProdutos(): Observable<UserProduto[]> {
    return this.http.get<UserProduto[]>(this.userProdutoApiUrl);
  }

  getUserProdutoById(id: number): Observable<UserProduto> {
    return this.http.get<UserProduto>(`${this.userProdutoApiUrl}/${id}`);
  }

  createUserProduto(userProduto: UserProduto): Observable<UserProduto> {
    return this.http.post<UserProduto>(this.userProdutoApiUrl, userProduto);
  }

  updateUserProduto(id: number, userProduto: UserProduto): Observable<UserProduto> {
    return this.http.put<UserProduto>(`${this.userProdutoApiUrl}/${id}`, userProduto);
  }

  deleteUserProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.userProdutoApiUrl}/${id}`);
  }

  // ============================
  // Método de Tratamento de Erros
  // ============================

  private handleError(error: any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro do lado do cliente: ${error.error.message}`;
    } else {
      errorMessage = `Erro do servidor: ${error.status}\nMensagem: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
