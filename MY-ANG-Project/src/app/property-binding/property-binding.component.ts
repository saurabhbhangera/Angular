import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `<button [disabled]="isDisabled">Submit</button>`,
})
export class PropertyBindingComponent {
  isDisabled = true;
}