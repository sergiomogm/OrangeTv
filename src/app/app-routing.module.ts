import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';

const routes: Routes = [
  {path : '', component : InicioComponent},
  {path : 'pelicula/:nombre', component :PeliculasComponent},
];

const config : ExtraOptions = {
    scrollPositionRestoration : 'enabled',
    onSameUrlNavigation :  'reload',
    urlUpdateStrategy : 'eager'
}

@NgModule({
  imports: [RouterModule.forRoot(routes , config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
