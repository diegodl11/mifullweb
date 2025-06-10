import { Component, inject, signal } from '@angular/core';
import { sign } from 'crypto';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { Character } from '../../interfaces/character.interface';
import { DragonballService } from '../../services/dragonvall.service';


//Una interface define la forma que debe tener un objeto. No genera
//código en tiempo de ejecución, pero sirve como ayuda para el tipado estático.

@Component({
  selector: 'app-dragonball',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonballsuper.component.html',
  styleUrl: './dragonballsuper.component.scss'
})
export class DragonballsuperComponent {
  // //ya están en nuestro nuevo componente
  // name = signal("");
  // power = signal(0);
  // //inyeccion de servicios tradicional
  // *******************************
  // constructor(

  //   public dragonballService: DragonballService
  // ){}
  // addCharacter(){
  //   this.dragonballService.addCharacter();
  // }
  

  //nueva inyeccion de servicios: ahora se puede llamar 
  // al servicio directamente en el html
  //mucho mas limpio
  public dragonballService = inject(DragonballService);



}
