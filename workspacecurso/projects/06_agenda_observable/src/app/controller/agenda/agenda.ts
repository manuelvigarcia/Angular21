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
    this.contactos=[];
    this.agendaService.obtenerContactos().subscribe(data=>this.contactos = data);
  }


  mostrar():void{
    this.show=true;
    this.agendaService.obtenerContactos().subscribe(data=>this.contactos = data);
  }

  agregarContacto():void{
    this.agendaService.agregarContacto(this.contacto).subscribe(data=>{
      if(!data){
        alert("Contacto repetido!!!")
      } else{
        this.contacto=new Contacto("","",0);
      }
    })
  }

  eliminarContacto(telefono:string):void{
    this.agendaService.eliminarContacto(telefono).subscribe(data=>this.mostrar());
  }

  delete(){

  }
}
