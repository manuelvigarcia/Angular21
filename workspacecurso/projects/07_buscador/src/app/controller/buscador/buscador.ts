import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { Resultado } from '../../model/resultado';
import { BuscadorService } from './../../service/buscador-service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  imports: [DatePipe,UpperCasePipe,FormsModule,CommonModule],
  templateUrl: './buscador.html',
  styleUrl: './buscador.css',
})
export class Buscador implements OnInit{
  tematicas:string[]=[];
  tematica:string="--Temática--";
  resultados:Resultado[]=[];


  constructor(private buscadorService:BuscadorService){
  }
  ngOnInit():void{
    this.buscadorService.obtenerTematicas()
      .subscribe(data=>this.tematicas=data);
    this.resultados=[];
  }
  mostrarTematica():void{
    this.buscadorService.porTematica(this.tematica)
      .subscribe({
        next:resultados=>this.resultados = resultados,
        error:err=>alert(err)
      })
  }

}
