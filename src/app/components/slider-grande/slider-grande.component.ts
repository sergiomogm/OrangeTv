import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-grande',
  templateUrl: './slider-grande.component.html',
  styleUrls: ['./slider-grande.component.scss']
})
export class SliderGrandeComponent implements OnInit, OnChanges {
 
  @Input() destacados : any[]  = [] 
  elementos : number = 0
  activo : number = 0
  constructor() { }

  ngOnInit(): void {
    console.log("iniciando")
    this.elementos = this.destacados.length
  }
  ngOnChanges() : void {
    console.log('cambios')
    this.elementos = this.destacados.length
  }
  aumentarActivo() : void{
    if(this.activo < this.elementos-1){
      this.activo++
    }else{
      this.activo = 0
    }
  }
  disminuirActivo() : void{
    if(this.activo > 0){
      this.activo--
    }else{
      this.activo = (this.elementos - 1)
    }
  }
  setActivo( valor : number ) : void{
    this.activo = valor
  }

}
