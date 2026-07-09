import { Tematica } from './../../service/tematica';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Resultado } from '../../model/resultado';

@Component({
  selector: 'app-buscador',
  imports: [FormsModule],
  templateUrl: './buscador.html',
  styleUrl: './buscador.css',
})
export class Buscador {
  tematica=signal<string>("");
  resultados=signal<Resultado[]>([])
  tematicaselecionada=signal<string>("")

  constructor(private tematicaservice:Tematica){
  }

  mostrarTematica(){
    this.tematicaselecionada.set(this.tematica())
    this.tematicaservice.porTematica(this.tematica())
        .subscribe({
          next:items=>this.resultados.set(items),
          error:err=>alert(`No se pudo mostrar la información: ${err}.`)
        });
  }
  borrarResultado(url:string){
    this.tematicaservice.del(url).subscribe({
      next:data=>this.mostrarTematica(),
      error:err=>alert(`No se pudo eliminar: ${err}`)
    });
  }
}
