import { AfterViewInit, Component, OnInit, signal, ViewChild } from '@angular/core';
import { PaisesService } from './../../service/paises-service';
import { Pais } from '../../model/pais';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortHeader, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-paises',
  imports: [MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSortHeader,
    FormsModule,CommonModule,
    MatButtonModule,
    MatInputModule],
  templateUrl: './paises.html',
  styleUrl: './paises.css',
})
export class Paises implements OnInit,AfterViewInit{
  listapaises=signal<Pais[]>([]);
  //selectedcontinent=signal<string>("-Continente")
  listacontinentes=signal<string[]>([])
  displayedColumns: string[] = ['Pais', 'Continente', 'Poblacion','Bandera'];
  @ViewChild(MatPaginator)
  set matPaginator(paginator: MatPaginator) {
    if (paginator) {
      this.paginator = paginator;
      this.dataSource.paginator = paginator;
    }
  }paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource:MatTableDataSource<Pais> = new MatTableDataSource<Pais>();
  constructor(private paisesService:PaisesService){}
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  ngOnInit(): void {
    this.paisesService.obtenerContinentes().subscribe(continentes=>this.listacontinentes.set(continentes));
  }
  cargarPaises(event:any):void{
    this.paisesService.obtenerPaises(event.target.value).subscribe(data=>{
                          this.listapaises.set(data);
                          this.dataSource.data=this.listapaises();
                      });
  }
}
