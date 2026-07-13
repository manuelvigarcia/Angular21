import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Curso } from '../model/curso';
import { Alumno } from '../model/alumno';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  baseUrl="http://localhost:8000/"

  constructor(private http:HttpClient){}

  cursos():Observable<Curso[]>{
    return this.http.get<Curso[]>(this.baseUrl+"cursos")
  }

  alumnos():Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.baseUrl+"alumnos")
  }

  alumnoPorEmail(email:string):Observable<Alumno>{
    let emailUrl:string=encodeURIComponent(this.baseUrl+"buscar/"+email);
    return this.http.get<Alumno>(emailUrl)
  }

  alumnosPorCurso(curso:string):Observable<Alumno[]>{
    let cursoUrl:string=this.baseUrl+"alumnoscurso";
    return this.http.get<Alumno[]>(cursoUrl,{params:{curso:curso}})
  }

  eliminar(email:string):Observable<void>{
    let deleteUrl:string=encodeURIComponent(this.baseUrl+"eliminar/"+email);
    return this.http.delete<void>(deleteUrl)
  }
  alta(nuevo:Alumno):Observable<void>{
    let headers=new HttpHeaders();
    headers=headers.set("Content-Type","application/json");
    return this.http.post<void>(this.baseUrl+"alta",nuevo,{headers:headers});
  }
}
