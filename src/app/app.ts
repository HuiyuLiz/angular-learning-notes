import { Component, signal } from '@angular/core';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-learning-notes');
  version=21
  count=0

  handleIncrement() {
    this.count++;
  }

  handleDecrement() {
    this.count--;
  }

  handleReset() {
    this.count=0;
  }
}
