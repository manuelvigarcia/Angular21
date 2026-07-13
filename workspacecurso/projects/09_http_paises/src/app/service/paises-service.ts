import { Injectable } from '@angular/core';
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

  loadPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url)
  }

  obtenerContinentes():Observable<string[]>{
    this.loadPaises().subscribe(paises=>{
                          this.paises=paises;
                          this.continentes=Array.from(new Set(this.paises.map(p=>p.region)));
                        });
    return this.loadPaises().pipe(
          map(arrayPaises=>[...new Set(arrayPaises.map(pais=>pais.region))].sort()));
  }

  obtenerPaises(continente:string):Observable<Pais[]>{
    return of(this.paises.filter(p=>p.region==continente));
  }
}
