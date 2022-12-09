import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { MatDialog } from '@angular/material/dialog';
import { DetailsClientesComponent } from 'src/app/components/details-clientes/details-clientes.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'detalhes', 'editar', 'excluir'];
  dataSource: Cliente[] = [];

  constructor(private clienteService: ClienteService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.clienteService.findAll().subscribe(clientes => {
      this.dataSource = clientes;
    });
  }

  public delete(id: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.clienteService.delete(id).subscribe(() => {
        alert("Cliente excluido.");
        this.initializeTable();
      });
    }
  }
  public openDetails(clientes: Cliente): void{
    this.dialog.open(DetailsClientesComponent, {
      width: "400px",
      data: clientes
    });
  }
}
