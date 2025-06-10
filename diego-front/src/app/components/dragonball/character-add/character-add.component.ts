import { ChangeDetectionStrategy, Component, output, signal} from '@angular/core';
import { Character } from '../../../interfaces/character.interface';
@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',

})
export class CharacterAddComponent { 

    name = signal("");
    power = signal(0);

    newCharacter = output<Character>();
    addCharacter() {
      // Validar que el nombre y el poder sean válidos antes de 
      // agregar un nuevo personaje
      
      if(!this.name() || !this.power || this.power() <= 0) {
        return;
      }
      const newCharacter: Character = {
        id: Math.floor(Math.random() * 20000) + 1,
        name: this.name(),
        power: this.power()
      };
      
     
      //no usar push para señales
      this.newCharacter.emit(newCharacter);
      this.resetFields();
    }
    resetFields(){
      this.name.set('');
      this.power.set(0);
    }


}
