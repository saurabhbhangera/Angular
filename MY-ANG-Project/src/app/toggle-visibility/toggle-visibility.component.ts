import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-visibility',
  template: `<button (click)="toggle()">Toggle</button><p *ngIf="isVisible">Hello!</p>`,
})
export class ToggleVisibilityComponent {
  isVisible = false;

  toggle() {
    this.isVisible = !this.isVisible;
  }
}
