import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';  

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css'],
  standalone: true,
  imports: [DatePipe]  
})
export class BuiltInPipesComponent {
  currentDate = new Date(); 
}