import { Tematica } from './../../service/tematica';
import { Component, signal } from '@angular/core';
import { Resultado } from '../../model/resultado';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alta-controller',
  imports: [FormsModule],
  templateUrl: './alta-controller.html',
  styleUrl: './alta-controller.css',
})
export class AltaController {
  resultado=signal<Resultado>({"url":"","tematica":"","descripcion":""});

  constructor(private tematicaservice:Tematica){}

  guardar(){
    this.tematicaservice.alta(this.resultado())
        .subscribe({
            next:data=> alert("Nuevo elemento almacenado"),
            error:err=> alert(`No se pudo añadir, URL repetida:${err}`)
        });
  }
}
