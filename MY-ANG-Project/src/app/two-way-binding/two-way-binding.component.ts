import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `<input [(ngModel)]="name" placeholder="Enter name"> <p>Your name: {{ name }}</p>`,
})
export class TwoWayBindingComponent {
  name: string = '';
}