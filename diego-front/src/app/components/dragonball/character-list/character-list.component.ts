import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
//input.require es una funcion que me sirve para mandar una informacion. el require dice 
//que es obligatoria
  characters= input.required<Character[]>();
  listado = input.required<string>();

}
