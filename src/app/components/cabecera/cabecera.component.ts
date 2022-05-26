
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  activo      : boolean = false
  nombre      : string  = ''
  sliders     : any     = []
  peliculas   : any     = []
  
  constructor( public datosService : DataService ) { }

  ngOnInit(): void {
    this.datosService.getSliders()
    .subscribe((data : any) =>{
      this.sliders = data.data
    })
    this.datosService.getPeliculas()
    .subscribe((data : any) =>{
      this.peliculas = data.data
    })
  }

  setActivo(){
    this.activo = !this.activo
  }
  
}
