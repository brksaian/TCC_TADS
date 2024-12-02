import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    const expectedRole = route.data?.['role']; // Acessar a role esperada

    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }

    if (expectedRole && this.authService.getUserRole() !== expectedRole) {
      this.router.navigate([this.authService.getHomeRoute()]);
      return false;
    }

    return true;
  }
}
