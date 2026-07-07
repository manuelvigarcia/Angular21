import { AgendaService } from '../../service/agenda';
import { Component, signal } from '@angular/core';
import { Contacto } from '../../model/contacto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule],
  templateUrl: './agenda.html',
  styleUrl: './agenda.css',
})
export class Agenda {
  contactos:Contacto[];
  contacto:Contacto=new Contacto("","",0);
  show:boolean=false;

  constructor(private agendaService:AgendaService){
    this.contactos=agendaService.obtenerContactos();
  }


  mostrar():void{
    this.show=true;
    this.contactos=this.agendaService
  }

  agregarContacto():void{
    if(!this.agendaService.agregarContacto(this.contacto)){
      alert("Contacto repetido!!!")
      return;
    }
    this.contacto=new Contacto("","",0);
  }
  delete():void{
    this.show=false;
    let idx:number;
    idx = this.contactos.findIndex((c) => c.telefono == this.contacto.telefono);
    if (idx>=0){
      this.contactos.splice(idx,1);
      alert('deleted one contact')
    }
    this.contacto=new Contacto("","",0);
  }

  eliminarContacto(telefono:string):void{
    this.agendaService.eliminarContacto(telefono);
    this.mostrar()  //para actualizar la lista de contactos
  }
}
