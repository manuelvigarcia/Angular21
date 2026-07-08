import { Service } from '@angular/core';
import { Contacto } from '../model/contacto';
import { Observable } from 'rxjs/internal/Observable'
import { of } from 'rxjs';

@Service()
export class AgendaService {
  contactos:Contacto[]=[];
  agregarContacto(contacto:Contacto):Observable<boolean>{
    if(this.contactos.some(c=>c.telefono==contacto.telefono)){
          return of(false);
    }
    this.contactos.push(contacto);
    return of(true);
  }

  obtenerContactos():Observable<Contacto[]>{
    return of(this.contactos)
  }

  obtenerTelefonos():Observable<String[]>{
    return(of(this.contactos.map(c=>c.telefono)))
  }

  eliminarContacto(telefono:string):Observable<void>{
    this.contactos=this.contactos.filter(c=>c.telefono!=telefono)
    // return of() // Si se deja así, no se notifica el final de la ejecución a quien observa
    return of(void 0) // esto es un return vacío, pero que notifica a los observadores
  }

  /*delete():void{
    this.show=false;
    let idx:number;
    idx = this.contactos.findIndex((c) => c.telefono == this.contacto.telefono);
    if (idx>=0){
      this.contactos.splice(idx,1);
      alert('deleted one contact')
    }
    this.contacto=new Contacto("","",0);
  }*/


}
