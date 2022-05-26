import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ComponentsModule } from '../components/components.module';
import { PeliculasComponent } from './peliculas/peliculas.component';



@NgModule({
  declarations: [
    InicioComponent,
    PeliculasComponent
  ],
  exports: [
    InicioComponent,
    PeliculasComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
