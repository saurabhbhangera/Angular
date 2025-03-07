import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'template-form', loadComponent: () => import('./app/template-driven-form/template-driven-form.component').then(m => m.TemplateDrivenFormComponent) },
  { path: 'reactive-form', loadComponent: () => import('./app/reactive-form/reactive-form.component').then(m => m.ReactiveFormComponent) }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()] // Merging both HttpClient and Router
}).catch((err) => console.error(err));