import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';
//el injectable lo que hcae es transformar nuestra clase en un servicio, es decir, que 
//desde que inicio la app, tenemos ya estos datos corriendo. Al ponerlo en root
//este servicio es accesible desde todos lados
@Injectable({providedIn: 'root'})
export class DragonballService {
     
  characters= signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8500 },
  
 
  ]);

 addCharacter(character:Character) {
    this.characters.update(
      (list) => [...list, character]
    );
  
  }
}