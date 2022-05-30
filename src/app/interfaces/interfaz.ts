export interface Pelicula {
    nombre     : String,
    img        : String,
    tipo       : String,
    ano        : Number,
    edad       : String,
    duracion   : String,
    idiomas    : String,
    imgrande   : String,
    subtitulos : String,
    href       : String,
    descripcion: String,
    pago       : Boolean,
}
export interface Destacado{
    numero     : Number,
    imagen     : String,
    titulo     : String,
    ano        : Number,
    edad       : String,
    edad2      : String,
    duracion   : String,
    href       : String,
    descripcion: String,
}
export interface Slider{
    titulo: String, 
    slides:    any[] 
}