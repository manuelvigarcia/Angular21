import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
[x: string]: any;
  protected readonly title = signal('02_solicitud_datos');
  nombre:string="";
  edad:number=0;
  mensaje:string="";
  mostrarMensaje():void{
    this.mensaje="Te llamas " + this.nombre + " y tienes " + this.edad + " años";
  }
}
