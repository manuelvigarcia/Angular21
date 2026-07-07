import { FakeService } from './../../service/fake-service';
import { Component, OnInit, signal } from '@angular/core';
import { Post } from '../../model/Post';
import { Comentario } from '../../model/Comentario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fake',
  imports: [FormsModule],
  templateUrl: './fake.html',
  styleUrl: './fake.css',
})
export class Fake implements OnInit{
  posts=signal<Post[]>([]);
  comments=signal<Comentario[]>([]);
  postSelected=signal<number>(0);

  constructor(private fakeService:FakeService){}
  ngOnInit():void{
    this.postSelected.set(0);
    this.posts.set([]);
    this.comments.set([]);
    this.fakeService.obtenerPosts().subscribe(data=>this.posts.set(data));
  }

  seleccionPost():void{
    this.fakeService.obtenerComentariosPost(this.postSelected())
      .subscribe(data=>this.comments.set(data));
  }

}
