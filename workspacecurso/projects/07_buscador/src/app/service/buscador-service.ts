import { Resultado } from './../model/resultado';
import { Service } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs'

@Service()
export class BuscadorService {
  resultados:Resultado[]=[
    new Resultado("http://www.fnac.es/","libros","Libros y más",new Date(2023,11,3)),
    new Resultado("http://www.mybook.com/","libros","librería de temas varios",new Date(2024,9,13)),
    new Resultado("http://www.game.es/","juegos","Juegos variados",new Date(2025,11,6)),
    new Resultado("http://www.music.es/","música","La mejor música",new Date(2024,8,17)),
    new Resultado("http://www.tech.com/","libros","Libros técnicos",new Date(2021,5,6)),
    new Resultado("http://www.eljuego.es/","juegos","Juegos on-line",new Date(2023,3,30))
   ];

  todos():Observable<Resultado[]>{
    return of(this.resultados)
  }
  porTematica(tematica:string):Observable<Resultado[]>{
    return of(this.resultados.filter(t=>t.tematica==tematica));
  }
  obtenerTematicas():Observable<string[]>{
    // return of([...new Set(this.resultados.map(r=>r.tematica))])
    return of(Array.from(new Set(this.resultados.map(r=>r.tematica))));
  }
}
