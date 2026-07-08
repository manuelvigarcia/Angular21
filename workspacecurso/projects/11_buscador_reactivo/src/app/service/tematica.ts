import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resultado } from '../model/resultado';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Tematica {
  baseUrl="http://localhost:8000/buscador/items"
  resultados:Resultado[]=[]

  constructor(private http:HttpClient){}

  porTematica(tematica:string):Observable<Resultado[]>{
    return this.http.get<Resultado[]>(this.baseUrl,{params:{tematica:tematica}})
  }
  alta(nuevo:Resultado):void{

  }
}
