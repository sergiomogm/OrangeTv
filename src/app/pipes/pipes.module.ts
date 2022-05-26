import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltradoPipe } from './filtrado.pipe';



@NgModule({
  declarations: [
    FiltradoPipe
  ],exports:[
    FiltradoPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
