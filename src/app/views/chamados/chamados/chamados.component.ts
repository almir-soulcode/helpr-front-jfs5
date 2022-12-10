import { ChamadoService } from './../../../services/chamado.service';
import { Chamado } from './../../../models/chamado';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsChamadosComponent } from 'src/app/components/details-chamados/details-chamados.component';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.css']
})
export class ChamadosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'funcionario', 'dataAbertura', 'status', 'editar', 'detalhes'];
  dataSource: Chamado[] = [];

  constructor(private chamadoService: ChamadoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.chamadoService.findAll().subscribe(chamados => {
      this.dataSource = chamados;
    });
  }
  public openDetails(chamado: Chamado): void{
    this.dialog.open(DetailsChamadosComponent, {
      width: "400px",
      data: chamado
    });
  }
}
