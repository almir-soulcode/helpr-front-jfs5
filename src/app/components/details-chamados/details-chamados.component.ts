import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Chamado } from 'src/app/models/chamado';

@Component({
  selector: 'app-details-chamados',
  templateUrl: './details-chamados.component.html',
  styleUrls: ['./details-chamados.component.css']
})
export class DetailsChamadosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public chamado: Chamado ) { }

  ngOnInit(): void {
  }

}
