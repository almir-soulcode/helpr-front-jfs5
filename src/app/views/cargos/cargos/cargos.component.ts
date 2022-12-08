import { Component, OnInit } from '@angular/core';
import { Cargo } from './../../../models/cargo';


@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'salario', 'editar', 'excluir'];
  dataSource: Cargo[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}