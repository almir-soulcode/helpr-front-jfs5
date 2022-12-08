import { FuncionarioService } from './../../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario'
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'cargo', 'editar', 'excluir'];
  funcionario: Funcionario[] = [];
  dataSource = new MatTableDataSource<Funcionario>(this.funcionario);
  constructor(private funcionarioService: FuncionarioService ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.funcionarioService.findAll().subscribe(funcionarios => {
      this.dataSource = new MatTableDataSource<Funcionario>(funcionarios);
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public delete(id: number): void {
    let ok = confirm("tem certeza que deseja excluir?");
    if(ok) {
      this.funcionarioService.delete(id).subscribe(() => {
        alert("Funcionário excluido.");
        this.initializeTable();
      });
    }
  }

  

}

