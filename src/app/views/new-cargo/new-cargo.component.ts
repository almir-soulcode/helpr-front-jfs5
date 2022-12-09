import { Cargo } from '../../models/cargo';
import { Router } from '@angular/router';
import { CargoService } from '../../services/cargo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cargo',
  templateUrl: './new-cargo.component.html',
  styleUrls: ['./new-cargo.component.css']
})
export class NewCargoComponent implements OnInit {

  public formCargo: FormGroup;

  constructor(
    fb: FormBuilder,
    private cargoService: CargoService,
    private router: Router
  ) {
    this.formCargo = fb.group({
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
        alert("Cargo cadastrado com sucesso!");
        this.router.navigate(["/cargos"]);
      });
    }
    else {
      alert("Dados inválidos.");
    }
  }
}

