import { Component } from '@angular/core';

@Component({
  selector: 'app-show-message',
  imports: [],
  templateUrl: './show-message.component.html',
  styleUrl: './show-message.component.css'
})
export class ShowMessageComponent {

  showMessage() {
    alert('Hello World');
  }
  clearMessage() {
    alert('');
  }
}
