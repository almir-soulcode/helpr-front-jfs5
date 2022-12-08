import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
public formCargo: FormGroup

  constructor(formBuilder: FormBuilder, private cargoService: CargoService, private router: Router) {
    this.formCargo = formBuilder.group({
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      salario: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  public create(): void {
    if(this.formCargo.valid){
      this.cargoService.create(this.formCargo.value).subscribe(
        () => {
          alert("Cargo cadastrado com sucesso !")
          this.router.navigateByUrl("/cargos")
        }
      )
    }else{
      alert(`Dados Inválidos`)
    }
    
  }
}
