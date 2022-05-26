import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  nombre : string = ''
  pelicula : any = {}
  peliculas : any = []
  constructor(
    private activatedRoute : ActivatedRoute,
    private dataService : DataService,
    private router : Router,
  ) { 
    router.events.subscribe( data =>{
      if (data instanceof NavigationEnd){
        this.activatedRoute.params.subscribe(( { nombre } )=>{
          this.nombre = nombre
        })
        this.dataService.getPeliculas()
        .subscribe((data : any) =>{
          this.pelicula = data.data.find(( cadaPelicula : any )=>cadaPelicula.href === this.nombre )
          this.peliculas = data.data
        })
      }
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(( { nombre } )=>{
      this.nombre = nombre
    })
    this.dataService.getPeliculas()
    .subscribe((data : any) =>{
      this.pelicula = data.data.find(( cadaPelicula : any )=>cadaPelicula.href === this.nombre )
      this.peliculas = data.data
    })
    
  }

  setImagen() : string {
    return `url(${this.pelicula.imgrande})`
  }
}
