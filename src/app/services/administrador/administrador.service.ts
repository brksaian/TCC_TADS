import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import API_URLS from '../../shared/constants/api-urls';

@Injectable({
  providedIn: 'root',
})
export class AdministradorService {
  constructor(private http: HttpClient) {}

  getTotalRegisteredUsers(): Observable<{ customers: number; stores: number }> {
    const token: String = localStorage.getItem('authToken') || '';
    return this.http.get<{ customers: number; stores: number }>(
      API_URLS.register.admin.getTotalRegisteredUsers,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'ngrok-skip-browser-warning': '69420',
        },
      }
    );
  }

  getTotalRegisteredProducts(): Observable<{
    totalRegisteredProducts: number;
  }> {
    const token: String = localStorage.getItem('authToken') || '';
    return this.http.get<{ totalRegisteredProducts: number }>(
      API_URLS.catalog.admin.getTotalRegisteredProducts,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'ngrok-skip-browser-warning': '69420',
        },
      }
    );
  }

  getTotalRegisteredReviews(): Observable<{
    totalReviews: number;
  }> {
    const token: String = localStorage.getItem('authToken') || '';
    return this.http.get<{ totalReviews: number }>(
      API_URLS.social.admin.getTotalReviews,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'ngrok-skip-browser-warning': '69420',
        },
      }
    );
  }

  getProductsWithoutCategory(
    page: number,
    size: number,
    sortDirection: string = 'ASC',
    sortBy: string = 'name'
  ): Observable<any> {
    const token: string = localStorage.getItem('authToken') || '';
    const url = `${API_URLS.catalog.admin.getProductsWithoutImage(
      page,
      size,
      sortDirection,
      sortBy
    )}`;

    return this.http.get<any>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'ngrok-skip-browser-warning': '69420',
      },
    });
  }

  getProductsWithoutImage(
    page: number,
    size: number,
    sortDirection: string = 'ASC',
    sortBy: string = 'name'
  ): Observable<any> {
    const token: string = localStorage.getItem('authToken') || '';
    const url = `${API_URLS.catalog.admin.getProductsWithoutImage(
      page,
      size,
      sortDirection,
      sortBy
    )}`;

    return this.http.get<any>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'ngrok-skip-browser-warning': '69420',
      },
    });
  }

  listUsers(
    page: number,
    size: number,
    sortDirection: string = 'ASC',
    sortBy: string = 'firstName'
  ): Observable<any> {
    const token: string = localStorage.getItem('authToken') || '';
    const url = `${API_URLS.register.admin.listUsers(
      page,
      size,
      sortDirection,
      sortBy
    )}`;

    return this.http.get<any>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'ngrok-skip-browser-warning': '69420',
      },
    });
  }
}
