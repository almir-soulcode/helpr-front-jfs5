import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-details-clientes',
  templateUrl: './details-clientes.component.html',
  styleUrls: ['./details-clientes.component.css']
})
export class DetailsClientesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public cliente: Cliente) { }

  ngOnInit(): void {
  }
}

