import { PaisesService } from './../../service/paises-service';
import { FormsModule } from '@angular/forms';
import { Component, signal, OnInit } from '@angular/core';
import { Pais } from '../../model/pais';

@Component({
  selector: 'app-paises',
  imports: [FormsModule],
  templateUrl: './paises.html',
  styleUrl: './paises.css',
})
export class Paises implements OnInit{
  listapaises=signal<Pais[]>([]);
  listacontinentes=signal<string[]>([])
  selectedcontinent=signal<string>("")
  consultedremote=signal<number>(0)

  constructor(private paisesService:PaisesService){}
  ngOnInit(): void {
    this.paisesService.obtenerContinentes()
        .subscribe(continentes=>this.listacontinentes.set(continentes));
    this.paisesService.obtenerPaises(this.selectedcontinent())
        .subscribe(paises=>this.listapaises.set(paises));
    this.consultedremote.set(this.paisesService.getTimesConsulted());
  }
  paisesDeContinente():void{
    this.paisesService.obtenerPaises(this.selectedcontinent())
      .subscribe(data=>this.listapaises.set(data));
    this.consultedremote.set(this.paisesService.getTimesConsulted());
  }
  obtenerContinentes():void{
    this.paisesService.obtenerContinentes()
        .subscribe(data=>this.listacontinentes.set(data))
    this.consultedremote.set(this.paisesService.getTimesConsulted());
  }

}
