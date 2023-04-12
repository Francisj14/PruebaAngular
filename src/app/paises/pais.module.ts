import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';


import { PaisComponent } from './pais/pais.component';
import { RegionesComponent } from './regiones/regiones.component';
import { ContinentesComponent } from './continentes/continentes.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    PaisComponent,
    RegionesComponent,
    ContinentesComponent,
    BuscarComponent,
    TablaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  exports:[
    PaisComponent,
    RegionesComponent,
    ContinentesComponent,
    BuscarComponent,
    TablaComponent
  ]
})
export class PaisModule { }
