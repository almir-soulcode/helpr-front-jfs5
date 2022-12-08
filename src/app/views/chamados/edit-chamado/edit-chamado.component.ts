import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chamado } from 'src/app/models/chamado';
import { Cliente } from 'src/app/models/cliente';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-edit-chamado',
  templateUrl: './edit-chamado.component.html',
  styleUrls: ['./edit-chamado.component.css']
})
export class EditChamadoComponent implements OnInit {

  public clientes: Cliente[] = [];
  public funcionarios: any = [];

  private funcionarioEmpty: any = {
    id: NaN,
    nome: "",
    cpf: "",
    email: "",
    cargo: {
      nome: "",
      descricao: "",
      salario: NaN
    }
  }

  private clienteEmpty: Cliente = {
    nome: "",
    cpf: "",
    email: "",
    telefone: ""
  };

  public chamado: Chamado = {
    titulo: "",
    status: "",
    descricao: "",
    cliente: this.clienteEmpty,
    funcionario: this.funcionarioEmpty
  }

  constructor(
    private route: ActivatedRoute,
    private chamadoService: ChamadoService,
    private clienteService: ClienteService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.initializeClientes();
    this.initializeFuncionarios();
    this.initializeChamado();
  }

  private initializeClientes(): void {
    this.clienteService.findAll().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  private initializeFuncionarios(): void {
    this.funcionarios.push({
      id: 1,
      nome: "Renato Pereira"
    },
    {
      id: 2,
      nome: "Victor Icoma"
    });
  }

  private initializeChamado(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.chamadoService.findById(id).subscribe(chamado => {
        if (!chamado.funcionario)
          chamado.funcionario = this.funcionarioEmpty;
        if (!chamado.cliente)
          chamado.cliente = this.clienteEmpty;
        this.chamado = chamado;
      });
    }
  }

  public update(form: NgForm): void {
    if (form.valid) {
      this.chamadoService.update(this.chamado).subscribe(chamado => {
        this.toastr.success('Chamado editado com sucesso!!')
      });
    }
    else {
      this.toastr.error('Dados invalidados!')     
    }
  }

}
