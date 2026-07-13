import { CursosService } from './../../service/cursos-service';
import { Component, signal } from '@angular/core';
import { Curso } from '../../model/curso';

@Component({
  selector: 'app-buscar-cursos',
  imports: [],
  templateUrl: './buscar-cursos.html',
  styleUrl: './buscar-cursos.css',
})
export class BuscarCursos {
  listaCursos=signal<Curso[]>([]);

  constructor(private cursosService:CursosService){}

  obtenerCursos(){
    this.cursosService.cursos()
    .subscribe(cursos=>this.listaCursos.set(cursos))
  }
}
