import { Component, HostListener, Input , OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit , OnChanges{

  @HostListener('window:resize', ['$event']) onResize(event : any) {
    this.anchoVentana = event.target.innerWidth;
    this.recalcular()
  }

  @Input() titulo           : string = ''
  @Input() elementoVisible  : number = 6
  @Input() slides           : any[]  = [] 
  numero                    : number = 0
  resultado                 : number = 3
  anchoSlider               : string = ''
  gridSlider                : string = ''
  anchoVentana              : number = 2000
  visibleBase               : number = 6

  constructor() { }

  ngOnInit(): void {
    console.log('Iniciando')
    this.calculos()
    this.anchoVentana = window.innerWidth
    this.recalcular()
  }
  ngOnChanges() : void {
    console.log('cambios')
    this.visibleBase = this.elementoVisible
    this.calculos()
  }
  aumentarNumero() : void{
    console.log( 'aumentar' )
    console.log( this.numero )
    if( this.numero < this.resultado ){
      this.numero++
    }
  }
  disminuirNumero() : void{
    if(this.numero > 0){
      this.numero--
    }
  }
  recalcular() : void{
    if(this.anchoVentana < 1000){
      if( this.visibleBase/2 == this.elementoVisible || this.visibleBase == 1){
       }else{
        this.elementoVisible = this.elementoVisible/2
        this.calculos()
      } 
    }else if(this.anchoVentana > 1000){
      if( this.visibleBase/2 == this.elementoVisible){
        this.elementoVisible = this.elementoVisible*2
        this.calculos()
      }else{
     }
    }
  }
  ancho()      : string { return this.anchoSlider }
  translateX() : string { return `translateX(${ -100/(this.slides.length) * this.numero }%)` }
  grid()       : string { return this.gridSlider  }
  calculos()   : void {
    this.resultado    = (this.slides.length - this.elementoVisible)
    this.anchoSlider  = `${ 100*(this.slides.length/this.elementoVisible) }%`
    this.gridSlider   = `repeat(${this.slides.length} , 1fr )`
  } 
}
