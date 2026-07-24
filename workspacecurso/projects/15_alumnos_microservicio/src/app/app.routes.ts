import { Routes } from '@angular/router';
import { BuscarCursos } from './controller/buscar-cursos/buscar-cursos';
import { BuscarAlumnos } from './controller/buscar-alumnos/buscar-alumnos';
import { AlumnosCurso } from './controller/alumnos-curso/alumnos-curso';
import { NuevoAlumno } from './controller/nuevo-alumno/nuevo-alumno';
import { VerFavoritos } from './controller/ver-favoritos/ver-favoritos';

export const routes: Routes = [
  {
    "path":"nuevoalumno",
    "component":NuevoAlumno
  },
  {
    "path":"cursos",
    "component":BuscarCursos
  },
  {
    "path":"alumnos",
    "component":BuscarAlumnos
  },
  {
    "path":"alumnoscurso",
    "component":AlumnosCurso
  },
  {
    "path":"verfavoritos",
    "component":VerFavoritos
  }
];
