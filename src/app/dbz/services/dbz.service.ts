import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import {v4 as uuid} from 'uuid';
@Injectable({
    providedIn: 'root'
})
export default class DBZService {

    public characters: Character[]=[{
        Id:uuid(),
        name:'Krilin',
        power:1000
    },
    {
        Id:uuid(),
        name:'Goku',
        power:90000
    },
    {
        Id:uuid(),
        name:'Vegeta',
        power:75000
    }];

    onNewCharacter(character:Character):void {
        const newCharacter:Character={Id:uuid(), ...character}
        this.characters.push(newCharacter)
        //console.log('MainPage');
        console.log(this.characters)
    }

    onDeletewithID(Id:string){
        this.characters=this.characters.filter(character=>character.Id !==Id)
    }
}