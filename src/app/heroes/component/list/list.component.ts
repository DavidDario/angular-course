import { Component } from '@angular/core';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public AnimalNames: string[]=['Monkey','Ape','Jiraf','Krabs','Sponge'];
  public deleteAnimal?:string;
  removeLastHeroe():void {
    this.deleteAnimal=this.AnimalNames.pop();
    
  }

} 