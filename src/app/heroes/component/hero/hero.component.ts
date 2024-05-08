import { Component } from '@angular/core';
import { CommonModule,NgIf } from '@angular/common';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string= 'ironman';
  public age:number=45;
  //Los gets son metodos 
  get capitalizeName():string {
    return this.name.toUpperCase();
  }
  
  //Metodo
getHeroDescription():string {
  return `${this.name} - ${this.age}`;
}

changeHero():void{
  this.name='Spuderman';
}
changeAge():void{
  this.age=25;
}

resetForm():void{
  this.name='ironman';
  this.age=45;
  //document.querySelectorAll('h1')!.forEach(element => {
  //  element.innerHTML = '<h1> Desde Angular </h1>';
  //});
}

}
