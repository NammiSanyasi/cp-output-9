import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cp-output';

  /*ReceivedFromTheChild!:string;

  receive(event:string){
     console.log(event)
     this.ReceivedFromTheChild=event

  }*/


  ReceivedFromTheChild!:string;

  receive(event:string){
     console.log(event)
     this.ReceivedFromTheChild=event;
   }
}