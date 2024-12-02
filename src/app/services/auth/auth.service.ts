import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(token: string, role: string = ''): void {
    localStorage.setItem('authToken', token);
    this.setUserRole(role);
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    this.router.navigate(['/guest/home']);
  }

  isLoggedIn(): boolean {
    return (
      !!localStorage.getItem('authToken') && !!localStorage.getItem('userRole')
    );
  }

  getUserRole(): string {
    return localStorage.getItem('userRole') || '';
  }

  setUserRole(role: string): void {
    localStorage.setItem('userRole', role);
  }

  getHomeRoute(): string {
    const role = this.getUserRole();
    switch (role) {
      case 'ADMIN':
        return '/administrador/home';
      case 'CLIENTE':
        return '/consumidor/home';
      case 'ESTABELECIMENTO':
        return '/estabelecimento/home';
      default:
        return '/guest/home';
    }
  }
}
