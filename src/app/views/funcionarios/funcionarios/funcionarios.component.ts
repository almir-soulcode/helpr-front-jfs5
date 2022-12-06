import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'perfil', 'foto', 'editar', 'excluir'];
  dataSource: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.initializeTable()
  }

  public initializeTable():void {
    this.funcionarioService.findAll().subscribe( funcionarios => {
      this.dataSource = funcionarios
    })
  }

  public delete(id: number) {
    this.funcionarioService.delete(id).subscribe(
      ()=> {this.initializeTable()}
    )
  }

}
