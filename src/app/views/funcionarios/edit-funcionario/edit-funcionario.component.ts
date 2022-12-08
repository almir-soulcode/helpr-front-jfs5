import { FuncionarioService } from './../../../services/funcionario.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-edit-funcionario',
  templateUrl: './edit-funcionario.component.html',
  styleUrls: ['./edit-funcionario.component.css']
})
export class EditFuncionarioComponent implements OnInit {

  public funcionario: Funcionario = {
    nome: '', 
    cpf: '',
    email: '',  
    cargo: '', 
    senha: ''
  }

  public cargos: any = [];

  constructor(
    private route: ActivatedRoute,
    private funcionarioService: FuncionarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initilizeFields();
    this.initializeCargos();
  }

  private initializeCargos(): void {
    this.cargos.push(
      {
        idCargo: 1, 
        nome: "Diretor geral",
      },
      {
        idCargo: 2,
        nome: "Diretor de setor"
      },
      {
        idCargo: 3,
        nome: "Técnico Geral"
      }
    )
  }



  private initilizeFields(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.funcionarioService.findById(id).subscribe(funcionario => {
        this.funcionario = funcionario;
      });
    }
  }

  public update(formEdit: NgForm): void {
    if(formEdit.valid) {
      this.funcionarioService.update(this.funcionario).subscribe(() => {
        alert("Funcionário editado.");
        this.router.navigate(["/funcionarios"]);
      });
    }
    else {
      alert("Dados inválidos.");
    }
  }

}

