import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'salario', 'editar', 'excluir'];

  dataSource: Cargo[] = [];

  constructor(private cargoService: CargoService) { }

  ngOnInit(): void {
    this.initializeTable()
  }

  initializeTable(): void{
    this.cargoService.findAll().subscribe(
      (batatas) => { this.dataSource = batatas }
    )
  }

  delete(id: number): void{
  }

}
