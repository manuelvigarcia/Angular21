import { Service } from '@angular/core';
import { Contacto } from '../model/contacto';

@Service()
export class AgendaService {
  contactos:Contacto[]=[];
  agregarContacto(contacto:Contacto):boolean{
    if(this.contactos.some(c=>c.telefono==contacto.telefono)){
          return false;
    }
    this.contactos.push(contacto);
    return true;
  }

  obtenerContactos():Contacto[]{
    return this.contactos
  }

  eliminarContacto(telefono:string):void{
    this.contactos=this.contactos.filter(c=>c.telefono!=telefono)
  }
}
