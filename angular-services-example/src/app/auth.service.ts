import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class AuthService {
  private apiUrl = 'https://your-api-url.com/auth'; 

  constructor(private http: HttpClient) {}

  login(): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username: 'user', password: 'pass' });
  }

  logout() {
    console.log('User logged out');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); 
  }
}