import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Character } from '../../interfaces/character';
import { v4 as uuid } from 'uuid';
//import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrl: './dbz-list.component.css'
})
export class DbzListComponent {
  @Input()
  public characterList: Character[]=[{
    Id: uuid(),
    name:'Trunks',
    power:10
  }];

  OndeleteIndex(){
    
  }
  @Output() 
  public onDeleteID:EventEmitter<string> =new EventEmitter();

  /*onDeleteCharacter(character:Character):void {
  //Emitir el ID del personaje
  const DeleteID=character.Id
  this.onDeleteID.emit(DeleteID)

}*/

onDeleteCharacter(id?:string):void {
  //Emitir el ID del personaje
  if(!id) return;
  this.onDeleteID.emit(id)

}


}
