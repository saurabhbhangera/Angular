import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,  
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() childMessage: string = ''; 
  @Output() sendMessage: EventEmitter<string> = new EventEmitter();

  sendToParent() {
    this.sendMessage.emit('Hello from Child!');
  }
}