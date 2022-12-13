import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { Funcionario } from 'src/app/models/funcionario';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-funcionario',
  templateUrl: './edit-funcionario.component.html',
  styleUrls: ['./edit-funcionario.component.css']
})
export class EditFuncionarioComponent implements OnInit {

  public cargos: Cargo[] = [];

  public funcionario: Funcionario = {
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

  constructor(    
    private route: ActivatedRoute,
    private funcionarioService: FuncionarioService,
    private cargoService: CargoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeFieldCargos();
    this.initilizeFields();
  }

    private initilizeFields(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.funcionarioService.findById(id).subscribe(funcionario => {
        this.funcionario = funcionario;
      });
    }
  }

  private initializeFieldCargos(): void {
    this.cargoService.findAll().subscribe(cargo => {
      this.cargos = cargo;
    });
  }


  public update(formFuncionario: NgForm): void {
    if(formFuncionario.valid) {
      this.funcionarioService.update(this.funcionario).subscribe(response => {
        alert("Funcionario editado com sucesso.");
        this.router.navigate(["/funcionarios"]);
      });
    }
    else {
      alert("Dados inválidos.");
    }
  }

}