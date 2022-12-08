import { CargoService } from './../../../services/cargo.service';
import { Cargo } from './../../../models/cargo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'salario', 'editar', 'excluir'];
  dataSource: Cargo[] = []
  constructor(private cargoService: CargoService) { }

  ngOnInit(): void {
    this.initializeTable()
  }

  private initializeTable(): void {
    this.cargoService.findAll().subscribe(cargos => {
      this.dataSource = cargos;
    });
  }
}
