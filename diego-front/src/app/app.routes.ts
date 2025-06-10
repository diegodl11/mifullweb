import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HerosComponent } from './pages/heros/heros.component';
import { DragonballComponent } from './pages/dragonball/dragonball.component';
import { DragonballsuperComponent } from './pages/dragonballsuper/dragonballsuper.component';

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
