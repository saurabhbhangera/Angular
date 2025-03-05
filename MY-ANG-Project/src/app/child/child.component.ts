import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Hello, {{ name }}!</p>`,
})
export class ChildComponent {
  @Input() name: string = '';
}