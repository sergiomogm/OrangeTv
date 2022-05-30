import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { SliderComponent } from './slider/slider.component';
import { SliderCardComponent } from './slider-card/slider-card.component';
import { SliderGrandeComponent } from './slider-grande/slider-grande.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    CabeceraComponent,
    SliderComponent,
    SliderCardComponent,
    SliderGrandeComponent,
  ],
  exports: [
    CabeceraComponent,
    SliderGrandeComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    PipesModule
  ]
})
export class ComponentsModule { }
