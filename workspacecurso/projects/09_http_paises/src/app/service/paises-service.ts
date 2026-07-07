import { Injectable, Service } from '@angular/core';
import { Pais } from '../model/pais';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  paises:Pais[]=[];
  continentes:string[]=[]
  url:string="https://countries.dev/countries?fields=name,region,population,flags"

  constructor(private http:HttpClient){}

  private startService():void{
    if(!(this.paises.length>0)){
      this.loadPaises().subscribe(paises=>this.paises=paises);
    }
  }

  private loadPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url)
  }

  obtenerContinentes():Observable<string[]>{
    this.startService();
    return of(Array.from(new Set(this.paises.map(p=>p.region))).sort())
  }

  obtenerPaises(continente:string):Observable<Pais[]>{
    this.startService();
    return of(Array.from(new Set(this.paises.filter(p=>p.region==continente))))
  }
}
