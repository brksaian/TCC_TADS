import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  AutoCadastroResponse,
  ForgotPasswordResponse,
  LoginResponse,
  UserProduto,
  Usuario,
} from '../../shared/interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8086/auth';
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

  // login(email: string, senha: string): Observable<LoginResponse> {
  //   const url = `${this.apiUrl}/login`;
  //   const body = { email, senha };
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  //   return this.http.post<LoginResponse>(url, body, { headers }).pipe(
  //     catchError(this.handleError)
  //   );
  // }
  login(email: string, senha: string): Observable<String | null> {
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/generate-token`, { email, senha })
      .pipe(
        map((response) => {
          if (response && response.token) {
            const { token } = response;

            // Salva o token no localStorage
            localStorage.setItem('authToken', token);

            // Decodifica o token JWT para obter os dados do usuário
            //const decodedToken: any = jwtDecode(token);

            return token;
          } else {
            return null;
          }
        }),
        catchError((error) => {
          console.error('Erro ao fazer login:', error);
          return of(null);
        })
      );
  }

  autoCadastro(
    nome: string,
    email: string,
    senha: string,
    perfil: string,
    cnpj?: string
  ): Observable<AutoCadastroResponse> {
    const url = `${this.apiUrl}/autocadastro`;

    const body =
      perfil === 'estabelecimento'
        ? { nome, email, senha, perfil, cnpj }
        : { nome, email, senha, perfil };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .post<AutoCadastroResponse>(url, body, { headers })
      .pipe(catchError(this.handleError));
  }

  forgotPassword(email: string): Observable<ForgotPasswordResponse> {
    const url = `${this.apiUrl}/forgot-password`;
    const body = { email };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .post<ForgotPasswordResponse>(url, body, { headers })
      .pipe(catchError(this.handleError));
  }

  getUsuarioLogado(): Usuario | null {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        // Decodifica o token JWT e retorna o usuário
        // const decoded: any = jwtDecode(token);
        // const usuarioLogado: Usuario = {
        //   id: decoded.id,
        //   nome: decoded.nome,
        //   email: decoded.email,
        //   perfil: decoded.perfil,
        //   senha: decoded.senha,
        // };
        return null; //usuarioLogado;
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
        return null;
      }
    }

    return null;
  }

  getInformacoesPerfil(usuarioId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${usuarioId}/informacoes`);
  }

  seguirUsuario(usuarioId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${usuarioId}/seguir`, {});
  }

  getIdUsuarioLogado(): number {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        //const decoded: any = jwtDecode(token);
        return 0; //decoded.id;
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
        return 0;
      }
    }

    return 0;
  }

  salvarLoginUsuario(token: string): void {
    localStorage.setItem('token', token);
  }

  logout(): void {
    localStorage.removeItem('token');
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

  updateUserProduto(
    id: number,
    userProduto: UserProduto
  ): Observable<UserProduto> {
    return this.http.put<UserProduto>(
      `${this.userProdutoApiUrl}/${id}`,
      userProduto
    );
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
