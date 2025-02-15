import { Routes } from '@angular/router';
import { MensajePagComponent } from './Proyecto/pages/Mensaje-Pag/mensaje-pag.component';
import { HomeComponent } from './Proyecto/pages/home/home.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mensaje', component: MensajePagComponent },
    { path: '**', redirectTo: 'home' } // Redirige a Home si no se encuentra la ruta


  ];
