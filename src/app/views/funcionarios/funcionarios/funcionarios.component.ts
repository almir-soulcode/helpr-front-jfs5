import { FuncionarioService } from './../../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario'


@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'cargo', 'editar', 'excluir'];
  dataSource: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.funcionarioService.findAll().subscribe(funcionarios => {
      this.dataSource = funcionarios;
    })
  }

  

}

