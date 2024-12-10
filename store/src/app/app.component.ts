import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { ShowMessageComponent } from './show-message/show-message.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListProductComponent, ShowMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Store online';
}
