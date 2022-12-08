import { Router } from '@angular/router';
import { Chamado } from './../../../models/chamado';
import { ChamadoService } from './../../../services/chamado.service';
import { ClienteService } from './../../../services/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { ToastrService } from 'ngx-toastr';
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
    private router: Router,
    private toastr: ToastrService
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
        /* this.notification.showSuccess() */
         this.toastr.success('Chamado cadastrado com sucesso') 

        this.router.navigate(["/chamados"]);
      });
    }
    else {
      /* this.notification.showError() */
      this.toastr.error('Dados Invalidos') 
    }
  }
} 
 