import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styles: 'p { color: red; }',
})
export class Login {
  clickHandler() {
    console.log('login button clicked');

    this.anotherClickHandler();
  }

  anotherClickHandler() {
    console.log('another login button clicked');
  }
}
