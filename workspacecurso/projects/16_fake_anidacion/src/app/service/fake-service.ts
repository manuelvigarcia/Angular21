import { Comentario } from './../model/Comentario';
import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { Post } from '../model/Post';
import { Observable } from 'rxjs'
import { filter } from 'rxjs'


@Injectable({
  providedIn: 'root',
})
export class FakeService {
  urlBase:string="https://jsonplaceholder.typicode.com/"
  constructor(private http:HttpClient){

  }
  obtenerPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.urlBase+"posts")
  }
  obtenerComentariosPost(postId:number):Observable<Comentario[]>{
    return this.http.get<Comentario[]>(this.urlBase+"comments",{params:{postId:postId}});
  }
  obtenerTitulosPost():Observable<string[]>{
    return this.obtenerPosts()
              .pipe(map(a=>a.map(n=>n.title)));
  }

  obtenerPostUsuario(userId:number):Observable<Post[]>{
    /*return this.obtenerPosts()
               .pipe(filter(n=>n.userId==userId));
    Esto no funciona porque lo que viene en el Observable de ObtenerPosts() es toda la lista, no un stream/flujo*/
    return this.obtenerPosts()
              .pipe(map(a=>a.filter(n=>n.userId==userId)));
  }

}
