import { FormsModule } from '@angular/forms';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contacto } from '../../model/contacto';

@Component({
  selector: 'app-agenda',
  imports: [RouterOutlet],
  templateUrl: './agenda.html',
  styleUrl: './app.css',
})
export class agenda {
  contactos=Contacto[]=[];
  contacto:Contacto=new Contacto("","",0);
  show:boolean=false;
  agregarContacto():void{
    /*
    if(this.contactos.some(c=>c.telefono==this.contacto.telefono)){
      alert("contacto repetido!!");
      return;
    }
     */
    for(let c of this.contactos){
      if(c.telefono==this.contacto.telefono){
        alert("Contacto repetido!!!");
        return
      }
    }
    this.contactos.push(this.contacto);
  }
}
