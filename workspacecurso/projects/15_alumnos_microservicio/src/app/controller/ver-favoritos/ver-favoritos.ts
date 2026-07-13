import { FavoritosService } from './../../service/favoritos-service';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-ver-favoritos',
  imports: [],
  templateUrl: './ver-favoritos.html',
  styleUrl: './ver-favoritos.css',
})
export class VerFavoritos  implements OnInit{
  emailsFavoritos=signal<string[]>([]);
  constructor(private favService:FavoritosService){}
  ngOnInit(): void {
    this.favService.getFavoritos().subscribe(data => this.emailsFavoritos.set(data))
  }
  addFavorito(email:string){
    this.favService.addFavorito(email).subscribe(()=>{})
  }
  delFavorito(email:string){
    this.favService.removeFavorito(email).subscribe(()=>{})
  }
  isFavorito(email:string){
    return(this.favService.isFavorito(email))
  }
}
