import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class MenuCursos implements OnInit{
  constructor(private router:Router){

  }
  ngOnInit():void {
    this.router.navigate(["/buscar-cursos"]);
  }
}
