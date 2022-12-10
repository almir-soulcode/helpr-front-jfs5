import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CargoService } from 'src/app/services/cargo.service';
import { ToastrService } from 'ngx-toastr';
import { Cargo } from 'src/app/models/cargo';

@Component({
  selector: 'app-new-cargo',
  templateUrl: './new-cargo.component.html',
  styleUrls: ['./new-cargo.component.css']
})
export class NewCargoComponent implements OnInit {

  public formCargo: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private cargoService: CargoService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.formCargo = formBuilder.group({
      nome: ["", [Validators.required]],
      descricao: ["", [Validators.required]],
      salario: ["", [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  public create(): void {
    if(this.formCargo.valid) {
      const cargo: Cargo = this.formCargo.value;
      this.cargoService.create(cargo).subscribe(response => {
        this.toastr.success("Cargo cadastrado com sucesso!");
        this.router.navigate(["/cargos"]);
      });
    }
    else {
      this.toastr.error("Dados inválidos.");
    }
  }

  
}
