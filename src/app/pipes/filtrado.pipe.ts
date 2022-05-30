import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrado',
})
export class FiltradoPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let [termino] = args;
    console.log(value);
    let nuevoArray: any = [];
    console.log(termino);
    //let nuevaClase = value.filter( (pelicula : any)=>{ return pelicula.slides.toLowerCase().includes(termino.toLowerCase()) } )
    
    
    /* Sergio */
    /* let nuevaClase = value.filter((sliders: any) => {
      sliders.slides.forEach((slide: any) => {
        if (slide.nombre.toLowerCase().includes(termino.toLowerCase())) {
          console.log(slide.nombre.toLowerCase());
          nuevoArray.push(slide);
        }
      });
    }); */

    // Test
   /*  let nuevaClase = value.filter((sliders: any) =>  {
      let var1 = sliders.slides.filter( ( slide : any ) => {
         return slide.nombre.toLowerCase().includes(termino.toLowerCase()) 
        
      } ) 
      console.log( var1 )
    }) */


    let nuevaClase = value.filter((pelicula: any) => pelicula.nombre.toLowerCase().includes(termino.toLowerCase()) )
    return nuevaClase;
    console.log(nuevoArray);
  }
}
