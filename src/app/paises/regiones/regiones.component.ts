import { Component } from '@angular/core';
import { Paises } from 'src/app/interfaces/pais.interfaces';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css']
})
export class RegionesComponent {
  
  
  error : boolean = false;
  public paises : Paises[] = [];

  constructor( private servicePais : PaisesService){}

  buscar( termino : string){
    this.error = false;
    this.servicePais.buscarRegion(termino).subscribe(resp =>{
      console.log(resp);
      this.paises = resp;
    },(err)=>{
      this.error=true;
      this.paises=[];
    })
  }

  sugerencias(termino:string ){
    this.error = false;
  }
  
}
