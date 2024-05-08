import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`
  <h1>{{title}}</h1>
  <hr>
  <p>Bienvenido a angular </p>
  <h3>Counter {{counter}} </h3>
  <button (click)="increaseBY(1)">+1</button>
  <button (click)="Reset()">Reset</button>
  <button (click)="increaseBY(-1)">-1</button>
  <!---->
  <hr>
  `
})
export class CounterComponent {
  public title:string='This is a tex base for make a test in the module for the funcion imoport and module control'
  public counter:number=10;

  increaseBY(value:number):void{
    
    this.counter+=value;
  }
  Reset():void{
    this.counter=10;
  }
}
