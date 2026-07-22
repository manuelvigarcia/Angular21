import { Injectable } from '@angular/core';
import { Pais } from '../model/pais';
import { Observable, of, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url:string="https://countries.dev/countries?fields=name,region,population,flags"

  constructor(private http:HttpClient){}

  getPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url);
  }

  obtenerContinentes():Observable<string[]>{
    return this.getPaises()
                .pipe(
                     map(ar=>[...new Set(ar.map(a=>a.region))])
                );
  }

  obtenerPaises(continente:string):Observable<Pais[]>{
    return this.getPaises()
                .pipe(
                    map(ar=>ar.filter(e=>e.region==continente))
                );
  }
}
