import { Component, Input, signal } from '@angular/core';
import { Comentario } from '../../model/Comentario';

@Component({
  selector: 'app-table-child',
  imports: [],
  templateUrl: './table-child.html',
  styleUrl: './table-child.css',
})
export class TableChild {
  @Input() comentarios=signal<Comentario[]>([]);
}
