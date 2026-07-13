import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resultado } from '../model/resultado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Tematica {
  baseUrl="http://localhost:8000/buscador/items"

  constructor(private http:HttpClient){}

  porTematica(tematica:string):Observable<Resultado[]>{
    return this.http.get<Resultado[]>(this.baseUrl,{params:{tematica:tematica}})
  }
  alta(nuevo:Resultado):Observable<void>{
    let headers=new HttpHeaders();
    headers=headers.set("Content-Type","application/json");
    return this.http.post<void>(this.baseUrl,nuevo,{headers:headers});
  }
  del(url:string):Observable<Resultado>{
    return this.http.delete<Resultado>(this.baseUrl,{params:{url:url}})
  }
}
