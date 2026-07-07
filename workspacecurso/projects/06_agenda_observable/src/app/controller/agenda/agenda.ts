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
  contactos=signal<Contacto[]>([]);
  contacto:Contacto=new Contacto("","",0);
  show=signal<boolean>(false);

  constructor(private agendaService:AgendaService){
    this.contactos=signal([]);
    this.agendaService.obtenerContactos().subscribe(data=>this.contactos.set(data));
  }


  mostrar():void{
    this.show.set(true);
    this.agendaService.obtenerContactos().subscribe(data=>this.contactos.set(data));
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
