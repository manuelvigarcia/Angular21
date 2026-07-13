import { from, Observable, of } from 'rxjs';
import { Alumno } from './../model/alumno';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  private listaName:string="listaLocalEmailsFavoritos"

  private obtenerListaEmailsFavoritos():Set<string> {
    let listaEmailsFavoritos:Set<string>=new Set<string>();
    let result: string = localStorage.getItem(this.listaName);
    if (result != null) {
      if (result!=""){
        listaEmailsFavoritos = new Set<string>(result.split(";"))
      }
    }
    return listaEmailsFavoritos;
  }
  private guardarListaEmailsFavoritos(lista:Set<string>):void{
    let listaString:string="";
    for (let email of lista){
      if (listaString==""){
        listaString=email;
      }else{
        listaString=listaString.concat(";",email)
      }
    }
    localStorage.setItem(this.listaName,listaString);
  }
  getFavoritos():Observable<string[]>{
    // ToDo: debe almacenar sólo el email
    return of(Array.from(this.obtenerListaEmailsFavoritos()))
  }
  addFavorito(favorito:string):Observable<void>{
    let listaEmailsFavoritos: Set<string> = this.obtenerListaEmailsFavoritos();
    if(!listaEmailsFavoritos.has(favorito)){
      listaEmailsFavoritos.add(favorito)
      this.guardarListaEmailsFavoritos(listaEmailsFavoritos)
    } else{
      throw new Error("Alumno ya es favorito");
    }
    return of(void(0))
  }
  removeFavorito(email:string):Observable<void>{
    let listaClaves:Set<string>=this.obtenerListaEmailsFavoritos()
    if(listaClaves.has(email)){
      listaClaves.delete(email)
      this.guardarListaEmailsFavoritos(listaClaves)
    }
    return of(void(0))
  }
  isFavorito(email:string):boolean{
    return(this.obtenerListaEmailsFavoritos().has(email))
  }
}
