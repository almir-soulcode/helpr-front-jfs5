import { FuturoCliente } from './../../../models/futuro-cliente';
import { FuturoClienteService } from './../../../services/futuro-cliente.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-futuros-clientes',
  templateUrl: './futuros-clientes.component.html',
  styleUrls: ['./futuros-clientes.component.css']
})
export class FuturosClientesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'editar', 'excluir'];
  futuroCliente: FuturoCliente[] = [];
  dataSource = new MatTableDataSource<FuturoCliente>(this.futuroCliente);
  constructor(
    private futuroClienteService: FuturoClienteService 
    ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.futuroClienteService.findAll().subscribe(futuroCliente => {
      this.dataSource = new MatTableDataSource<FuturoCliente>(futuroCliente);
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 

}
