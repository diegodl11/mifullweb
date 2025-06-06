import { Component, signal} from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  name = signal('Ironman');
  age = signal(45);

  getHeroDescription() {
    return `${this.name()} is ${this.age()} years old.`;
  }
  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
    console.log('Hero changed:', this.getHeroDescription());
  }
  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }
  changeAge() {
    this.age.set(60);
  
  }
}
