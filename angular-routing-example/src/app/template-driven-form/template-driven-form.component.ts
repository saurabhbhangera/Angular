import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import FormsModule here
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  user = {
    name: '',
    email: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted:', this.user);
    }
  }
}
