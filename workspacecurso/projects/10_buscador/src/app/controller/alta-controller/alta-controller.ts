import { Tematica } from './../../service/tematica';
import { Component, signal } from '@angular/core';
import { Resultado } from '../../model/resultado';

@Component({
  selector: 'app-alta-controller',
  imports: [],
  templateUrl: './alta-controller.html',
  styleUrl: './alta-controller.css',
})
export class AltaController {
  resultado=signal<Resultado>(new Resultado("","",""));

  constructor(private tematicaservice:Tematica){}

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
