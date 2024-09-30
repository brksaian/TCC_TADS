import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PrecoProduto, Produto } from '../../shared/interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'http://localhost:3000/produtos';
  private precoApiUrl = 'http://localhost:3000/preco_produto';

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  getProdutoById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }

  createProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  updateProduto(id: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiUrl}/${id}`, produto);
  }

  deleteProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getLastUpdatedProducts(limit: number = 5): Observable<Produto[]> {
    const url = `${this.apiUrl}?_sort=updated_at&_order=desc&_limit=${limit}`;
    return this.http.get<Produto[]>(url);
  }

  getProductsWithoutImage(): Observable<Produto[]> {
    const url = `${this.apiUrl}?image=null&image=`;
    return this.http.get<Produto[]>(url);
  }

  getProductsWithoutCategory(): Observable<Produto[]> {
    const url = `${this.apiUrl}?categoria=null&categoria=`;
    return this.http.get<Produto[]>(url);
  }


  // ============================
  // Métodos de Preço de Produto
  // ============================

  getPrecoProdutos(): Observable<PrecoProduto[]> {
    return this.http.get<PrecoProduto[]>(this.precoApiUrl);
  }

  getPrecoProdutoById(id: number): Observable<PrecoProduto> {
    return this.http.get<PrecoProduto>(`${this.precoApiUrl}/${id}`);
  }

  createPrecoProduto(precoProduto: PrecoProduto): Observable<PrecoProduto> {
    return this.http.post<PrecoProduto>(this.precoApiUrl, precoProduto);
  }

  updatePrecoProduto(id: number, precoProduto: PrecoProduto): Observable<PrecoProduto> {
    return this.http.put<PrecoProduto>(`${this.precoApiUrl}/${id}`, precoProduto);
  }

  deletePrecoProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.precoApiUrl}/${id}`);
  }

  getPrecoMedioProduto(produtoId: number): Observable<number> {
    const url = `${this.precoApiUrl}?produto_id=${produtoId}`;

    return this.http.get<PrecoProduto[]>(url).pipe(
      map((precos: PrecoProduto[]) => {
        if (precos.length === 0) {
          return 0;
        }
        const total = precos.reduce((acc, preco) => acc + preco.preco, 0);
        return total / precos.length;
      })
    );
  }

  getProdutosFiltrados(queryParams: any): Observable<Produto[]> {
    const { category, search, sort } = queryParams;

    let query = `${this.apiUrl}?`;

    if (category) {
      query += `categoria_like=${category}&`;
    }

    if (search) {
      query += `nome_like=${search}&`;
    }

    if (sort === 'A-Z') {
      query += `_sort=nome&_order=asc`;
    } else if (sort === 'Z-A') {
      query += `_sort=nome&_order=desc`;
    }

    return this.http.get<Produto[]>(query);
  }
}
