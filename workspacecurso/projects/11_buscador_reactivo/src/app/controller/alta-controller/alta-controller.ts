import { Tematica } from './../../service/tematica';
import { Component, signal } from '@angular/core';
import { Resultado } from '../../model/resultado';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { validadorUrl } from '../../validadores/ValidarUrl';

@Component({
  selector: 'app-alta-controller',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './alta-controller.html',
  styleUrl: './alta-controller.css',
})
export class AltaController {
  resultado=signal<Resultado>(new Resultado("","",""));

  altaForm = new FormGroup({
      url: new FormControl('', [Validators.required,validadorUrl]),
      tematica: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(10)])
    });

  constructor(private tematicaservice:Tematica){
    this.altaForm.get("url")?.valueChanges
          .subscribe(v=>this.altaForm.get("descripcion")?.setValue(v));
    this.altaForm.get("temática")?.valueChanges
        .subscribe( v=>{
          if (v=="libros"){
            this.altaForm.get("descripcion")?.addValidators(Validators.maxLength(20));
          } else {
            this.altaForm.get("descripcion")?.removeValidators(Validators.maxLength(20));
          }
          this.altaForm.get("descripcion")?.updateValueAndValidity();
        })
  }

  guardar(form:any){
    if(form.invalid){
      alert("El formulario no es válido")
      return
    }
    this.tematicaservice.alta(this.resultado())
        .subscribe({
            next:data=> alert("Nuevo elemento almacenado"),
            error:err=> alert("No se pudo añadir, URL repetida")
        });
  }
}
