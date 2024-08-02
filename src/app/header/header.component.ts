import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
/*@Output() Event =new EventEmitter();
value!:string;

Send(){
  this.Event.emit(this.value)
}*/



@Output() Event =new EventEmitter();
value1!:string;
value2!:string;
value3!:string;

Send(){
  this.Event.emit(this.value1+" "+this.value2+" "+this.value3)
}

}
