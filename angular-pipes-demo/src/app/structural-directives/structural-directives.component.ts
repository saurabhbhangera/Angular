import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {
  isVisible = true;
  items = ['Item 1', 'Item 2', 'Item 3'];

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}