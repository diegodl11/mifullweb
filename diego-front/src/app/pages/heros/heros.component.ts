import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-heros',
  imports: [UpperCasePipe],
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.scss'
})
export class HerosComponent {
  name = signal('Ironman');
  age = signal(45);

  // getHeroDescription() {
  //   return `${this.name()} is ${this.age()} years old.`;
  // }
  //las señales computadas son una forma de crear propiedades que dependen de otras señales
  //Solo se recalcula cuando cambian dependencias
  heroDescription = computed(() => {
    return `${this.name()} is ${this.age()} years old.`;  
  });
  capitalizedName = computed(() => {
    return this.name().toUpperCase(); 
  });
  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
    console.log('Hero changed:', this.capitalizedName());
  }
  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }
  changeAge() {
    this.age.set(60);
  
  }
}
