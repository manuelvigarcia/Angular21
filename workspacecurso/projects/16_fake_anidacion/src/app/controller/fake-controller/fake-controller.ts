import { Component, signal } from '@angular/core';
import { Comentario } from '../../model/Comentario';
import { Post } from '../../model/Post';
import { FakeService } from '../../service/fake-service';

@Component({
  selector: 'app-fake-controller',
  imports: [],
  templateUrl: './fake-controller.html',
  styleUrl: './fake-controller.css',
})
export class FakeController {
  posts=signal<Post[]>([]);
  comentarios=signal<Comentario[]>([]);
  constructor(private fakeService:FakeService){

  }
  ngOnInit(): void {
    this.fakeService.obtenerPosts()
    .subscribe({
      next:r=>this.posts.set(r),
      error:err=>alert(err)
    });
  }
  comentariosPost(postId:number):void{
    this.fakeService.obtenerComentariosPost(postId)
    .subscribe({
      next: r=>this.comentarios.set(r),
      error: err=>alert()
      });
  }
 }
