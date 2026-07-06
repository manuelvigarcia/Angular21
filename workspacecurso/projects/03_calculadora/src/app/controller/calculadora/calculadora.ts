import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Operacion } from '../../model/operacion';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  num1:number=0;
  num2:number=0;
  resultado:string="";
  listaresultados:Operacion[]=[];
  show:boolean=false;
  sumar():void{
    this.resultado=`La suma es ${this.num1+this.num2}`
    this.listaresultados.push(new Operacion(`${this.num1}+${this.num2}`, this.num1+this.num2));
  }
  multiplicar():void{
    this.resultado=`El producto es ${this.num1*this.num2}`
    this.listaresultados.push(new Operacion(`${this.num1}*${this.num2}`, this.num1*this.num2));
  }
  historico():void{
    this.show=true;
  }
}
