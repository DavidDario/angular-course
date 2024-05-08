//import { query } from '@angular/animations';
import { Component } from '@angular/core';
//Es es lo mas importante de trabajar en angular
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title: string = 'Hola mundo';
  public counter:number=10;

  increaseBY(value:number):void{
    
    this.counter+=value;
  }
  Reset():void{
    this.counter=10;
  }
}
