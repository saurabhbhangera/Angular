import { Component } from '@angular/core';
import { provideHttpClient, HttpClientModule } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AuthComponent } from './auth/auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, AuthComponent], 
  template: `
    <h1>Welcome to Angular</h1>
    <app-auth></app-auth> 
  `,
})
export class AppComponent {}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()] 
}).catch(err => console.error(err));