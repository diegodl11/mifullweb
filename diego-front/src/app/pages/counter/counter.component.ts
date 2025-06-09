import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter = 15;
  counterSignal = signal(15);
  constructor() {
      // Initialize the counter with a value 
      // esto lo que hará será que cada segundo se incremente el contador
      // se hace con señales porque es mas rapido y eficiente
      // setInterval(() => {

      //   this.counterSignal.update((v) => v + 1);
      // }, 1000);
        
  }
  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }
  decreaseBy(value: number) {
    this.counter -= value;
  }
  reset() {
    this.counter = 10;
    this.counterSignal.set(10);
  }
}
