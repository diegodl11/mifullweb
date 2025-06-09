import { Component, signal } from '@angular/core';
import { sign } from 'crypto';


//Una interface define la forma que debe tener un objeto. No genera
//código en tiempo de ejecución, pero sirve como ayuda para el tipado estático.
interface Character {
  id: number;
  name: string;   
  power: number;

}
@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonballsuper.component.html',
  styleUrl: './dragonballsuper.component.scss'
})
export class DragonballsuperComponent {

  name = signal("");
  power = signal(0);

  
  characters= signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8500 },
  
 
  ]);
  
 addCharacter() {
  // Validar que el nombre y el poder sean válidos antes de 
  // agregar un nuevo personaje
    if(!this.name() || !this.power || this.power() <= 0) {
      return;
    }
    const current = this.characters();
    //ultimo id disponible en el arreglo
    const lastId = Math.max(...current.map(c => c.id), 0); // `0` por si está vacío
    const newCharacter: Character = {
      id: lastId + 1,
      name: this.name(),
      power: this.power()
    };
    //no usar push para señales
    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }
  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
  

}
