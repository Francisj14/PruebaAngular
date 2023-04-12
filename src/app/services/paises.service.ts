import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Paises } from '../interfaces/pais.interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private url : string = "https://restcountries.com/v3.1";

  constructor( private http :HttpClient) { }

  get httpParams(){
    return  new HttpParams()
    .set('fields','name,capital,altSpellings,flags,population');
  }

  buscarPais(termino: string): Observable<Paises[]>{
    const apiUrl = `${this.url}/name/${termino}`
    return this.http.get<Paises[]>(apiUrl);
  }

  buscarRegion(termino: string): Observable<Paises[]>{
    const apiUrl = `${this.url}/capital/${termino}`
    return this.http.get<Paises[]>(apiUrl,{params:this.httpParams});
  }

  buscarContinente(termino: string): Observable<Paises[]>{
    const apiUrl = `${this.url}/region/${termino}`
    return this.http.get<Paises[]>(apiUrl,{params:this.httpParams});
  }

}
