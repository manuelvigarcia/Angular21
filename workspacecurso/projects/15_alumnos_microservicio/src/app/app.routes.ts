import { Routes } from '@angular/router';
import { BuscarCursos } from './controller/buscar-cursos/buscar-cursos';
import { BuscarAlumnos } from './controller/buscar-alumnos/buscar-alumnos';
import { AlumnosCurso } from './controller/alumnos-curso/alumnos-curso';
import { NuevoAlumno } from './controller/nuevo-alumno/nuevo-alumno';
import { VerFavoritos } from './controller/ver-favoritos/ver-favoritos';

export const routes: Routes = [
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
    "path":"nuevoalumno",
    "component":NuevoAlumno
  },
  {
    "path":"verfavoritos",
    "component":VerFavoritos
  }
];
