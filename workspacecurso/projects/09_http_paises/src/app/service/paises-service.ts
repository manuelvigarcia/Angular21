import { Injectable, Service } from '@angular/core';
import { Pais } from '../model/pais';
import { Observable, of, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  paises:Pais[]=[];
  continentes:string[]=[]
  url:string="https://countries.dev/countries?fields=name,region,population,flags"

  constructor(private http:HttpClient){}

  private startService():Observable<Pais[]>{
/*    if(!(this.paises.length>0)){
      this.loadPaises()
           .subscribe(paises=>{this.paises=paises;
                      this.continentes=Array.from(new Set(this.paises.map(p=>p.region)));
                      return of(this.paises);
      });
    }
    return of (this.paises);
*/
    return this.loadPaises();
  }

  private loadPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url)
  }

  obtenerContinentes():Observable<string[]>{
    //return this.startService().pipe(
    return this.loadPaises().pipe(
          map(arrayPaises=>[...new Set(arrayPaises.map(pais=>pais.region))].sort()));
  }

  obtenerPaises(continente:string):Observable<Pais[]>{
    return this.startService().pipe(
          map(arrayPaises=>arrayPaises.filter(p=>p.region==continente)))
  }
}
