import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'salario', 'editar', 'excluir'];

  constructor() { }

  ngOnInit(): void {
  }

}
