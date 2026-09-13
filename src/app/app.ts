import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 name=""

 changeName(event:Event){
  const value = (event.target as HTMLInputElement).value
  this.name = value;
 }
}
