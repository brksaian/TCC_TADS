import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services';

@Component({
  selector: 'app-redirect',
  template: '',
})
export class RedirectComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      const homeRoute = this.authService.getHomeRoute();
      this.router.navigate([homeRoute]);
    } else {
      this.router.navigate(['/guest/home']);
    }
  }
}
