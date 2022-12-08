import { Router } from '@angular/router';
import { FuncionarioService } from '../../../services/funcionario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-new-funcionario',
  templateUrl: './new-funcionario.component.html',
  styleUrls: ['./new-funcionario.component.css']
})
export class NewFuncionarioComponent implements OnInit {

  public formFuncionario: FormGroup;

  public cargos: any = [];

  constructor(formBuilder: FormBuilder,
    private funcionarioService: FuncionarioService,
    private router: Router
    ) {
      this.formFuncionario = formBuilder.group({
        nome: ["", [Validators.required]],
        email: ["", [Validators.required, Validators.email]],
        cpf: ["", [Validators.required]],
        cargo: ["", [Validators.required]],
        senha: ["", [Validators.required]]
      })
     }

  ngOnInit(): void {
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

  public create(): void {
    if(this.formFuncionario.valid) {
      const funcionario: Funcionario = this.formFuncionario.value;
      this.funcionarioService.create(funcionario).subscribe(response => {
        alert("Funcionário cadastrado com sucesso!");
        this.router.navigate(["/funcionarios"]);
      });
    }
    else {
      alert("Dados inválidos.");
    }
  }

}

