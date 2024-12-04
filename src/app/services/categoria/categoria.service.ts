import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import API_URLS from '../../shared/constants/api-urls';
import { Categoria } from '../../shared/interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private apiUrl = 'http://localhost:3000/categorias';

  constructor(private http: HttpClient) {}

  // Buscar todas as categorias
  getCategorias(
    page: number = 0,
    size: number = 100,
    sortDirection: string = 'ASC',
    sortBy: string = 'name'
  ): Observable<any> {
    const url = API_URLS.catalog.product.getCategories(
      page,
      size,
      sortDirection,
      sortBy
    );

    return this.http.get<any>(url, {
      headers: {
        'ngrok-skip-browser-warning': '69420',
      },
    });
  }

  // Buscar uma categoria por ID
  getCategoriaById(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.apiUrl}/${id}`);
  }

  // Criar uma nova categoria
  createCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiUrl, categoria);
  }

  // Atualizar uma categoria existente
  updateCategoria(id: number, categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.apiUrl}/${id}`, categoria);
  }

  // Deletar uma categoria
  deleteCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
