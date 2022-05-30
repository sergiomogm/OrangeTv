import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{
  sliders : any = []
  destacados : any = []
  constructor( public datosService : DataService  ) { }

  ngOnInit(): void {
    this.datosService.getSliders()
    .subscribe((data : any) =>{
      this.sliders = data.data
    })
    
    this.datosService.getDestacados()
    .subscribe((data : any) =>{
      this.destacados = data.data
    })
  }
  
}
