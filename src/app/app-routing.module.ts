import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Clase4RutaComponent } from './clase4-ruta/clase4-ruta.component';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'ruta',
    component: Clase4RutaComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
