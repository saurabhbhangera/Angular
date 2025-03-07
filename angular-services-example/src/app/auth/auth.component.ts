import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Ensure the correct path

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private authService: AuthService) {}

  login() {
    this.authService.login().subscribe({
      next: response => console.log('Login successful:', response),
      error: error => console.error('Login error:', error)
    });
  }

  logout() {
    this.authService.logout();
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}