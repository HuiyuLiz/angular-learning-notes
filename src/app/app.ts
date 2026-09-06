import { Component, computed, effect, signal, WritableSignal,Signal } from '@angular/core';
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
  username=""
  isVisible=false
  color='red'
  fruits=['Apple','Banana','Lemon']
  users=[
    {id:1,name:'Amy'},
    {id:2,name:'Ben'},
    {id:3,name:'Cindy'}
  ]
  signalCount =signal(10)
  num:WritableSignal<number>=signal(10)
  doubled:Signal<number> = computed(()=>this.num()*2)

  constructor(){
    effect(()=>{
      console.log('count',this.count)
      console.log('signalCount ',this.signalCount ())
    })
  }

  handleIncrement() {
    this.count++;
  }

  handleDecrement() {
    this.count--;
  }

  handleReset() {
    this.count=0;
  }

  handleUsernameChange(event: Event) {
    this.username=(event.target as HTMLInputElement).value;
  }

  setDefaultUsername() {
    this.username='John Doe';
  }

  handleUsernameByTemplateRef(username: string) {
    console.log('username',username);
  }

  handleToggleVisibility() {
    this.isVisible=!this.isVisible;
  }

  handleChangeColor(color: string) {
    this.color=color;
  }

  handleEvent(event:Event){
    console.log((event.type))
    console.log((event.target as HTMLInputElement).value)
  }

  incrementSignalCount (){
    this.signalCount .set(this.signalCount ()+1)
  }

  increaseByTen(){
    this.num.update(val=>val+10)
  }
}
