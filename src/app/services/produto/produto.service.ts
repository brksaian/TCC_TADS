import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'https://api.exemplo.com/products';

  constructor(private http: HttpClient) {}

  getProducts(queryParams: any): Observable<any> {
    return this.http.get(this.apiUrl, { params: queryParams });
  }
}
