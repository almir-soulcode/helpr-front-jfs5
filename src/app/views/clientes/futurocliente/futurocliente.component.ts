import { Component, OnInit } from '@angular/core';
import { FuturoCliente } from 'src/app/models/futurocliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { FuturoclienteService } from 'src/app/services/futurocliente.service';

@Component({
  selector: 'app-futurocliente',
  templateUrl: './futurocliente.component.html',
  styleUrls: ['./futurocliente.component.css']
})
export class FuturoclienteComponent implements OnInit {

  dataSource: FuturoCliente[] = [];
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'excluir'];

  constructor( 
    private futuroclienteService : FuturoclienteService
  ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.futuroclienteService.findAll().subscribe(futurosClientes => {
      this.dataSource = futurosClientes;
    });
  }

  public delete(idFuturoCliente: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.futuroclienteService.delete(idFuturoCliente).subscribe(() => {
        alert("Cliente excluido.");
        this.initializeTable();
      });
    }
  }

}
