import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pelicula, Destacado, Slider } from '../interfaces/interfaz';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  peliculas  = []
  sliders  = []
  destacados  = []


  constructor(
    private httpClient : HttpClient
  ) { }
  getPeliculas() : Observable<any>{
    return this.httpClient.get('https://orange-tv-api.vercel.app/Peliculas')
  }
  getSliders() : Observable<any>{
    return this.httpClient.get('https://orange-tv-api.vercel.app/Slider')
  }
  getDestacados() : Observable<any>{
    return this.httpClient.get('https://orange-tv-api.vercel.app/Destacados')
  }

}
