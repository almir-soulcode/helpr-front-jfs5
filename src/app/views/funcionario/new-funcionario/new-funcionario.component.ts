import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { Funcionario } from 'src/app/models/funcionario';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-new-funcionario',
  templateUrl: './new-funcionario.component.html',
  styleUrls: ['./new-funcionario.component.css']
})
export class NewFuncionarioComponent implements OnInit {

  public formFuncionario: FormGroup;
 
  public cargos: Cargo[] = [];
  public funcionario: Funcionario[] = [];

  constructor(
    formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private funcionarioService: FuncionarioService,
    private cargoService: CargoService,
    private router: Router
  ) { 
    this.formFuncionario = formBuilder.group({
      nome: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      cpf: ["", [Validators.required]], 
      cargo: ["",[Validators.required]],
      senha: ["", [Validators.required]]
    })  
  }

  ngOnInit(): void {
    this.initializeFieldCargos();
  }

  private initializeFieldCargos(): void {
    this.cargoService.findAll().subscribe(cargo => {
      this.cargos = cargo;
    });
  }


  public create(): void {
  if(this.formFuncionario.valid) {
      const funcionario: Funcionario = this.formFuncionario.value;
      this.funcionarioService.create(funcionario).subscribe(response => {
        alert("Funcionario cadastrado com sucesso!");
        this.router.navigate(["/funcionarios"]);
      });
    }
    else {
      alert("Dados inválidos.");
    }
  } 

}
