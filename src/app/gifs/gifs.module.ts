import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagPrincipalComponent } from './pag-principal/pag-principal.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { BuscarComponent } from './buscar/buscar.component';



@NgModule({
  declarations: [
    BuscarComponent,
    ImagenesComponent,
    PagPrincipalComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BuscarComponent,
    ImagenesComponent,
    PagPrincipalComponent,
  ]
})
export class GifsModule { }
