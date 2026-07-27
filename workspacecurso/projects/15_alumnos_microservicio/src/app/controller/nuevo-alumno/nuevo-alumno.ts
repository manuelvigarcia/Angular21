import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Alumno } from '../../model/alumno';
import { CursosService } from '../../service/cursos-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validadorCurso } from '../../validadores/ValidadorCurso';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Dialogo } from '../../ui/dialogo/dialogo';

@Component({
  selector: 'app-nuevo-alumno',
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './nuevo-alumno.html',
  styleUrl: './nuevo-alumno.css',
})
export class NuevoAlumno implements OnInit{

  error:boolean=false;
  registroForm = new FormGroup({
    idAlumno: new FormControl(0, [Validators.required, Validators.pattern('[0-9]{1,9}')]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nota: new FormControl('', [Validators.required, Validators.min(1),Validators.max(10)]),
    curso: new FormControl('', [Validators.required,validadorCurso])
  });

  constructor(private route:ActivatedRoute,
    private cursosService:CursosService,
    private matDialog:MatDialog){

  }
  ngOnInit(): void {
    this.registroForm.get("email").valueChanges.subscribe(data=>{
      const curso=this.registroForm.get("curso");
      if(data.endsWith("empresa.es")){
        curso.clearValidators();
      }else{
        curso.setValidators([Validators.required,validadorCurso]);
      }
      curso.updateValueAndValidity();
    });
  }
  alta(){
    if(this.registroForm.valid){
        const value=this.registroForm.value;
        const alumno:Alumno={idAlumno:value.idAlumno,nombre:value.nombre,curso:value.curso,email:value.email,nota:parseFloat(value.nota)};
        this.cursosService.alta(alumno).subscribe(
        {
          next: (data)=>this.matDialog.open(Dialogo,{data:{mensaje:"Alumno agregado"}}),
          error: error=>this.matDialog.open(Dialogo,{data:{mensaje:`${value.email} ya existe. No se añadió.`}}),
        }
      );
    }else{
      this.error=true;
    }
  }
}
