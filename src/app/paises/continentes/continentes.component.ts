import { Component } from '@angular/core';
import { Paises } from 'src/app/interfaces/pais.interfaces';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-continentes',
  templateUrl: './continentes.component.html',
  styleUrls: ['./continentes.component.css']
})
export class ContinentesComponent {
 continentes: string [] = ['europe','asia','america','africa','oceania'];

 regionActiva : string = "";
 paises : Paises[] = [];

 constructor(private paisesService : PaisesService){}
 
 getClaseCss(continente : string){
  return(continente === this.regionActiva) ? 'btn btn-primary':'btn btn-outline-primary';
 }

 actvarRegion(continente : string){
  this.regionActiva = continente;
  this.paisesService.buscarContinente(continente)
  .subscribe(data=>{
    this.paises = data;
  })
 }

}
