import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';  // ✅ Import the standalone ChildComponent

@Component({
  selector: 'app-parent',
  standalone: true,  // ✅ Mark it as standalone
  imports: [ChildComponent],  // ✅ Import ChildComponent
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentMessage = "Hello from Parent!";
  receivedMessage = '';

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
}