import { FavoritosService } from './../../service/favoritos-service';
import { CursosService } from './../../service/cursos-service';
import { Component, OnInit, signal } from '@angular/core';
import { Alumno } from '../../model/alumno';
import { Curso } from '../../model/curso';
import { Dialogo } from '../../ui/dialogo/dialogo';
import { MatDialog } from '@angular/material/dialog';
import { CalificacionPipe } from '../../pipes/calificacion-pipe';

@Component({
  selector: 'app-alumnos-curso',
  imports: [CalificacionPipe],
  templateUrl: './alumnos-curso.html',
  styleUrl: './alumnos-curso.css',
})
export class AlumnosCurso implements OnInit{
  cursos=signal<Curso[]>([])
  alumnosPorCurso=signal<Alumno[]>([])

  constructor(private cursosService:CursosService,
    private dialog:MatDialog, private favService:FavoritosService){}

  ngOnInit(): void {
    this.cursosService.cursos()
        .subscribe(cursos=>this.cursos.set(cursos));
  }

  mostrarAlumnos(event:any):void{
    let cursoName = event.target.value
    this.cursosService.alumnosPorCurso(cursoName)
        .subscribe(alumnos=>this.alumnosPorCurso.set(alumnos))
  }
  borrarAlumno(email:string):void{
    this.cursosService.eliminar(email)
        .subscribe({
          next:()=>{
            this.dialog.open(Dialogo,{
              data:{mensaje:`Se ha eliminado correctamente el alumno con email ${email}`}
            });
              /*let index=this.alumnosPorCurso.indexOf(this.alumnosPorCurso.find(alumno=>alumno.email === email))
              this.alumnosPorCurso.splice(index,1)*/
              this.alumnosPorCurso.set(this.alumnosPorCurso().filter(a=>a.email!=email));
            },
          error:(e)=>{if(e.status===409){
            alert(`No se ha podido eliminar al alumno con este email: ${email}`) }
          }
        });
  }
  addFavorito(alumno:Alumno){
    this.favService.addFavorito(alumno.email)
        .subscribe({
          next:()=>{
            this.dialog.open(Dialogo,{
              data:{mensaje:"Alumno añadido a favoritos",titulo:"Éxito"}
            })
          },
          error:err=>{
            this.dialog.open(Dialogo,{
              data:{mensaje:`No se ha podido añadir a favoritos\n ${err}`, titulo:"Error"}
            })
          }
        })
  }
  delFavorito(email:string){
    this.favService.removeFavorito(email)
        .subscribe({
          next:()=>{
            this.dialog.open(Dialogo,{
              data:{mensaje:"Alumno eliminado de favoritos",titulo:"Éxito"}
            })
          },
          error:err=>{
            this.dialog.open(Dialogo,{
              data:{mensaje:`No se ha podido eliminar de favoritos\n ${err}`, titulo:"Error"}
            })
          }
        })
  }
  isFavorito(email:string){
    return(this.favService.isFavorito(email))
  }
}
