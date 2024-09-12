import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  senha: string = '';

  constructor(private userService: UserService) {}

  onLogin() {
    this.userService.login(this.email, this.senha).subscribe(
      (response) => {
        console.log('Login bem-sucedido:', response);
      },
      (error) => {
        console.error('Erro ao fazer login:', error);
      }
    );
  }
}
