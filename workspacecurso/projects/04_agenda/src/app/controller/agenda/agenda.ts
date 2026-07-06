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
  contactos:Contacto[]=[];
  contacto:Contacto=new Contacto("","",0);
  show:boolean=false;

  mostrar():void{
    this.show=true;
  }

  agregarContacto():void{
    /*
    if(this.contactos.some(c=>c.telefono==this.contacto.telefono)){
      alert("contacto repetido!!");
      return;
    }
     */
    this.show=false;
    for(let c of this.contactos){
      if(c.telefono==this.contacto.telefono){
        alert("Contacto repetido!!!");
        return
      }
    }
    this.contactos.push(this.contacto);
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
}
