import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsCargoComponent } from 'src/app/components/details-cargo/details-cargo.component';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'salario', 'detalhes', 'editar', 'excluir'];

  dataSource: Cargo[] = [];

  constructor(private cargoService: CargoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.initializeTable()
  }

  initializeTable(): void{
    this.cargoService.findAll().subscribe(
      (batatas) => { this.dataSource = batatas }
    )
  }

  delete(id: number): void{
    this.cargoService.delete(id).subscribe(
      () => { 
        this.initializeTable()
        alert(`Cargo excluido com sucesso`)
      }
    )

  }
  public openDetails(cargo: Cargo): void{
    this.dialog.open(DetailsCargoComponent, {
      width: "400px",
      data: cargo
    });
  }
}
