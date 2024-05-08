import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'add-characters',
  templateUrl: './add-characters.component.html',
  styleUrl: './add-characters.component.css'
})
export class AddCharactersComponent {

@Output()
public onNewCharacter:EventEmitter<Character> =new EventEmitter();

//Personje definido
public characters: Character={
  name:'',
  power:0
}
/*{
  name:'Goku',
  power:9000
};*/

  emitCharacter(){
    console.log(this.characters)
    if(this.characters.name.length===0) return;
    this.onNewCharacter.emit(this.characters);
    this.characters ={name:'',power:0};
  }
}
