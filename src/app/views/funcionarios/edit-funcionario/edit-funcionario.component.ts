import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { Funcionario } from 'src/app/models/funcionario';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

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
    cargo: { idCargo: 0, nome: '', descricao: '', salario: 0 },
    senha: ''
  }

  public cargos: Cargo[] = []

  constructor(
    private funcionarioService: FuncionarioService,
    private cargosService: CargoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.inizializeCargosField()
    this.inizializeFields()
  }

  inizializeCargosField() {
    this.cargosService.findAll().subscribe(
      (cargos) => {this.cargos = cargos}
    )
  }

  inizializeFields() {
    const id: string | null = this.route.snapshot.paramMap.get('id')
    if(id) {
      this.funcionarioService.findById(id).subscribe(
        (funcionario) => {this.funcionario = funcionario}
      )
    }
    
  }

  public update(formEdit: NgForm){
    if(formEdit.valid) {
      this.funcionarioService.update(this.funcionario).subscribe(
        (ok)=> {
          alert('Funcionário salvo com sucesso!')
          this.router.navigateByUrl('/funcionarios')
        }
      )
    } else {
      alert('dados inválidos!')
    }
    
  }

}
