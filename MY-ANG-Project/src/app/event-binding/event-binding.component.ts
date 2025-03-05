import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `<button (click)="showAlert()">Click Me</button>`,
})
export class EventBindingComponent {
  showAlert() {
    alert('Button clicked!');
  }
}