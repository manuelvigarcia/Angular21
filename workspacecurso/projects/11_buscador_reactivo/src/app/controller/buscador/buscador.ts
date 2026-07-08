import { Tematica } from './../../service/tematica';
import { Observable } from 'rxjs';
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
    this.tematicaselecionada=this.tematica
    this.tematicaservice.porTematica(this.tematica())
        .subscribe(items=>this.resultados.set(items));
  }
  borrarResultado(){

  }
}
