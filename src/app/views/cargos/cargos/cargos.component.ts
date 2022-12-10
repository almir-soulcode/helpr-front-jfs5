import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CargoService } from 'src/app/services/cargo.service';
import { Cargo } from './../../../models/cargo';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'salario', 'editar', 'excluir'];
  cargo: Cargo[] = [];
  dataSource = new MatTableDataSource<Cargo>(this.cargo);

  constructor(
    private cargoService: CargoService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.cargoService.findAll().subscribe(cargos => {
      this.dataSource = new MatTableDataSource<Cargo>(cargos);
    });
  }

  /* public delete(id: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.cargoService.delete(id).subscribe(() => {
        this.toastr.success("Cargo excluido.");
        this.initializeTable();
      });
    }
  } */


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
}