import { Component } from '@angular/core';
import { ReversePipe } from '../reverse.pipe';  
@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css'],
  standalone: true,
  imports: [ReversePipe] 
})
export class CustomPipesComponent { }