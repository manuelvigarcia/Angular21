import { CursosService } from './../../service/cursos-service';
import { Component, OnInit, signal } from '@angular/core';
import { Alumno } from '../../model/alumno';
import { DecimalPipe } from '@angular/common';
import { CalificacionPipe } from "../../pipes/calificacion-pipe";

@Component({
  selector: 'app-buscar-cursos',
  imports: [DecimalPipe, CalificacionPipe],
  templateUrl: './buscar-cursos.html',
  styleUrl: './buscar-cursos.css',
})
export class BuscarCursos implements OnInit{
  listaCursos=signal<string[]>([]);
  listaAlumnosCurso=signal<Alumno[]>([]);

  constructor(private cursosService:CursosService){}

  ngOnInit(): void {
    this.obtenerCursos();
  }

  obtenerCursos(){
    this.cursosService.cursos()
    .subscribe(cursos=>this.listaCursos.set(cursos))
  }
  alumnosPorCurso(curso:string){
    this.cursosService.alumnosPorCurso(curso)
        .subscribe(alumnos=>this.listaAlumnosCurso.set(alumnos))
  }
}
