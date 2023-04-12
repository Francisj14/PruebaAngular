import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagPrincipalComponent } from './gifs/pag-principal/pag-principal.component';
import { PaisComponent } from './paises/pais/pais.component';
import { RegionesComponent } from './paises/regiones/regiones.component';
import { ContinentesComponent } from './paises/continentes/continentes.component';

const routes: Routes = [
  {path:'',component:PagPrincipalComponent,pathMatch:'full'},
  {path:'gifs',component:PagPrincipalComponent},
  {path:'paises',component:PaisComponent},
  {path:'regiones',component:RegionesComponent},
  {path:'continentes',component:ContinentesComponent},
  {path:'**',redirectTo:'paises'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
