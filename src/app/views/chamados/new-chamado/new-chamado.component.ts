import { Router } from '@angular/router';
import { Chamado } from './../../../models/chamado';
import { ChamadoService } from './../../../services/chamado.service';
import { ClienteService } from './../../../services/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-chamado',
  templateUrl: './new-chamado.component.html',
  styleUrls: ['./new-chamado.component.css']
})
export class NewChamadoComponent implements OnInit {

  public formChamado: FormGroup;

  public clientes: Cliente[] = [];

  constructor(
    formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private chamadoService: ChamadoService,
    private router: Router
  ) {
    this.formChamado = formBuilder.group({
      titulo: ["", [Validators.required]],
      descricao: ["", [Validators.required]],
      cliente: ["", [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.initializeFieldCliente();
  }

  private initializeFieldCliente(): void {
    this.clienteService.findAll().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  public create(): void {
    if(this.formChamado.valid) {
      const chamado: Chamado = this.formChamado.value;
      this.chamadoService.create(chamado).subscribe(() => {
        alert("Chamado cadastrado.");
        this.router.navigate(["/chamados"]);
      });
    }
    else {
      alert("Dados inválidos.");
    }
  }
}
