import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule,CommonModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  num1:number=0;
  num2:number=0;
  resultado:string="";
  listaresultados:number[]=[];
  show:boolean=false;
  sumar():void{
    this.resultado=`La suma es ${this.num1+this.num2}`
    this.listaresultados.push(this.num1+this.num2)
  }
  multiplicar():void{
    this.resultado=`El producto es ${this.num1*this.num2}`
    this.listaresultados.push(this.num1*this.num2)
  }
  historico():void{
    this.show=true;
  }
}
