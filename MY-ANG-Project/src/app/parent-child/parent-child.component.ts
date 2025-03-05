import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  template: `<app-child [name]="userName"></app-child>`,
})
export class ParentChildComponent {
  userName = 'John Doe';
}