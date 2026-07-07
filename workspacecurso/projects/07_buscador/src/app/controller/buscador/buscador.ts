import { BuscadorService } from './../../service/buscador-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-buscador',
  imports: [],
  templateUrl: './buscador.html',
  styleUrl: './buscador.css',
})
export class Buscador implements OnInit{
  tematicas:string[]=[];
  tematica:string="--Temática--";
  resultados:Resultado[];


  constructor(private buscadorService:BuscadorService){
    this.buscadorService.obtenerTematicas()
      .subscribe(tematicas=>this.tematicas=tematicas);
  }
  mostrarTematica(tematica:string):void{
    this.buscadorService.porTematica(tematica)
      .subscribe(resultados=>this.resultados = resultados);
  }
  ngOnInit():void{
    this.buscadorService.obtenerTematicas()
      .subscribe(data=>this.tematicas=data);
    this.resultados=[];
  }

}
