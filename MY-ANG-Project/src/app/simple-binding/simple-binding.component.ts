import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-binding',
  template: `<h2>{{ title }}</h2><p>{{ description }}</p>`,
})
export class SimpleBindingComponent {
  title = 'Simple Data Binding';
  description = 'This is an example of interpolation in Angular.';
}