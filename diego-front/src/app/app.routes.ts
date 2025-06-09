import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { HerosComponent } from './components/heros/heros.component';
import { DragonballComponent } from './components/dragonball/dragonball.component';
import { DragonballsuperComponent } from './components/dragonballsuper/dragonballsuper.component';

export const routes: Routes = [

    {
        path: '',
        component: CounterComponent,
    },
    {
        path: 'hero',
        component: HerosComponent,
    },
     {
        path: 'dragonball',
        component: DragonballComponent,
    },
    {
        path: 'dragonballsuper',
        component: DragonballsuperComponent,
    },
    //componente por defecto para la pagina que no existe. redirección a home
    {   
        path: "**",
        redirectTo: '',
    }
  

];
