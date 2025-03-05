import { Component } from '@angular/core';

@Component({
  selector: 'app-list-display',
  template: `<ul><li *ngFor="let item of items">{{ item }}</li></ul>`,
})
export class ListDisplayComponent {
  items = ['Apple', 'Banana', 'Cherry'];
}