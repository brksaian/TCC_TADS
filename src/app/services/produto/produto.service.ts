import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  // Buscar todos os preços de produtos
  getPrecoProdutos(): Observable<PrecoProduto[]> {
    return this.http.get<PrecoProduto[]>(this.precoApiUrl);
  }

  // Buscar um preço de produto por ID
  getPrecoProdutoById(id: number): Observable<PrecoProduto> {
    return this.http.get<PrecoProduto>(`${this.precoApiUrl}/${id}`);
  }

  // Criar um novo preço para um produto
  createPrecoProduto(precoProduto: PrecoProduto): Observable<PrecoProduto> {
    return this.http.post<PrecoProduto>(this.precoApiUrl, precoProduto);
  }

  // Atualizar um preço de produto existente
  updatePrecoProduto(id: number, precoProduto: PrecoProduto): Observable<PrecoProduto> {
    return this.http.put<PrecoProduto>(`${this.precoApiUrl}/${id}`, precoProduto);
  }

  // Deletar um preço de produto
  deletePrecoProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.precoApiUrl}/${id}`);
  }
}
