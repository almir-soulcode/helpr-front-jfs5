import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CargoService } from 'src/app/services/cargo.service';
import { Cargo } from './../../../models/cargo';


@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'salario', 'editar', 'excluir'];
  cargo: Cargo[] = [];
  dataSource = new MatTableDataSource<Cargo>(this.cargo);

  constructor(private cargoService: CargoService) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.cargoService.findAll().subscribe(cargo => {
      this.dataSource = new MatTableDataSource<Cargo>(cargo);
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
}