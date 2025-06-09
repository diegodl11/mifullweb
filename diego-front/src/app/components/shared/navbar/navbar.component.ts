import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  //router link es una directiva que permite navegar entre rutas
  //router link active para la barra de navegacion activa en cada momento
  //entonces se pueden cambiar los estilos de la barra activa
  imports: [RouterLink, RouterLinkActive ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
