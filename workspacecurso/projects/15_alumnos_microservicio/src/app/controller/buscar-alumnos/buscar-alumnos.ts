import { FavoritosService } from './../../service/favoritos-service';
import { Component, OnInit, signal } from '@angular/core';
import { Alumno } from '../../model/alumno';
import { CursosService } from '../../service/cursos-service';
import { pipe } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { CalificacionPipe } from "../../pipes/calificacion-pipe";

@Component({
  selector: 'app-buscar-alumnos',
  imports: [DecimalPipe,CalificacionPipe],
  templateUrl: './buscar-alumnos.html',
  styleUrl: './buscar-alumnos.css',
})
export class BuscarAlumnos implements OnInit{
  listaAlumnos=signal<Alumno[]>([]);
  emailsFavoritos=signal<string[]>([]);

  constructor(private cursosService:CursosService,
              private favService:FavoritosService){}

  ngOnInit(): void {
    this.favService.getFavoritos().subscribe(data => this.emailsFavoritos.set(data))
    this.cursosService.alumnos().subscribe(data=>this.listaAlumnos.set(data))
  }

  alumnosPorCurso(curso:string){
    this.cursosService.alumnosPorCurso(curso)
        .subscribe(alumnos=>this.listaAlumnos.set(alumnos))
  }

  eliminarAlumno(email:string){
    this.cursosService.eliminar(email)
        .subscribe(()=>{})
  }
  addFavorito(email:string){
    this.favService.addFavorito(email).subscribe(()=>{})
  }
  delFavorito(email:string){
    this.favService.removeFavorito(email).subscribe(()=>{})
  }
  isFavorito(email:string){
    return(this.favService.isFavorito(email))
  }
}
