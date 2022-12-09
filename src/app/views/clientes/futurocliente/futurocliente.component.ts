import { Component, OnInit } from '@angular/core';
import { FuturoCliente } from 'src/app/models/futuro-cliente';
import { FuturoClienteService } from 'src/app/services/futuro-cliente.service';

@Component({
  selector: 'app-futurocliente',
  templateUrl: './futurocliente.component.html',
  styleUrls: ['./futurocliente.component.css']
})
export class FuturoclienteComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'editar', 'excluir'];
  dataSource: FuturoCliente[] = [];

  constructor(private FuturoClienteService: FuturoClienteService) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.FuturoClienteService.findAll().subscribe(futurocliente => {
      this.dataSource = futurocliente;
    });
  }
  delete(id: number){
    
  }
}


