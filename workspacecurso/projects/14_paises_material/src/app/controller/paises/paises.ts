import { CommonModule } from '@angular/common';
import { PaisesService } from './../../service/paises-service';
import { FormsModule } from '@angular/forms';
import { Component, signal, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Pais } from '../../model/pais';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortHeader, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-paises',
  imports: [CommonModule,MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSortHeader,
    FormsModule],
  templateUrl: './paises.html',
  styleUrl: './paises.css',
})
export class Paises implements OnInit, AfterViewInit{
  listapaises=signal<Pais[]>([]);
  listacontinentes=signal<string[]>([])
  selectedcontinent=signal<string>("")
  displayedColumns: string[] = ['Pais', 'Continente', 'Poblacion','Bandera'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource:MatTableDataSource<Pais> = new MatTableDataSource<Pais>();

  constructor(private paisesService:PaisesService){}
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;  }
  ngOnInit(): void {
    this.paisesService.obtenerContinentes()
        .subscribe(continentes=>this.listacontinentes.set(continentes));
  }
  paisesDeContinente():void{
    this.paisesService.obtenerPaises(this.selectedcontinent())
      .subscribe(data=>this.listapaises.set(data));
      this.obtenerContinentes();
      this.dataSource.data=this.listapaises();
  }
  obtenerContinentes():void{
    this.paisesService.obtenerContinentes()
        .subscribe(data=>this.listacontinentes.set(data))
  }

}
