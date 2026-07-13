import { Tematica } from './../../service/tematica';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Resultado } from '../../model/resultado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscador',
  imports: [FormsModule],
  templateUrl: './buscador.html',
  styleUrl: './buscador.css',
})
export class Buscador {
  tematica=signal<string>("");
  resultados=signal<Resultado[]>([])

  constructor(private tematicaservice:Tematica){
  }

  mostrarTematica(){
    this.tematicaservice.porTematica(this.tematica())
        .subscribe({
            next:data=>this.resultados.set(data),
            error:err=>alert(`${err}. No se pudo mostrar la información`)
        });
  }

  borrarResultado(url:string){
    this.tematicaservice.del(url).subscribe({
        next:data=>{
          alert(`Se eliminó ${data.url} de ${data.tematica}`);
          this.mostrarTematica();
        },
        error:err=>alert(`${err}. No se pudo eliminar`)
    })
  }
}
