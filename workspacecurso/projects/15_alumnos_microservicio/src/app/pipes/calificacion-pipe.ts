import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calificacion',
})
/* insercion original
export class CalificacionPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/
export class CalificacionPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if(value<5)return "suspenso";
    if(value<7)return "aprobado";
    if(value<9)return "notable";
    if(value>10)return "Inválido";
    else{return "sobresaliente"}
  }
}
