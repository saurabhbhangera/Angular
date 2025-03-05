import { Component } from '@angular/core';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';
import { CommonModule } from '@angular/common';
import { LifecycleDirectiveDirective } from './lifecycle-directive.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LifecycleDemoComponent, LifecycleDirectiveDirective], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  destroyDirective = true;

  toggleDirective() {
    this.destroyDirective = !this.destroyDirective;
  }
}
