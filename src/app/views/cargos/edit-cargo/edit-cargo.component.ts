import { NgForm } from '@angular/forms';
import { CargoService } from './../../../services/cargo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from './../../../models/cargo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-cargo',
  templateUrl: './edit-cargo.component.html',
  styleUrls: ['./edit-cargo.component.css']
})
export class EditCargoComponent implements OnInit {

  public cargo: Cargo = {
    nome: '',
    descricao: '',
    salario: NaN,
  };

  constructor(
    private route: ActivatedRoute,
    private cargoService: CargoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initilizeFields();
  }

  private initilizeFields(): void {
    const idCargo: string | null = this.route.snapshot.paramMap.get('idCargo');
    if(idCargo) {
      this.cargoService.findById(idCargo).subscribe(cargo => {
        this.cargo = cargo;
      });
    }
  }

  public update(formEdit: NgForm): void {
    if(formEdit.valid) {
      this.cargoService.update(this.cargo).subscribe(() => {
        alert("Cargo editado.");
        this.router.navigate(["/cargos"]);
      });
    }
    else {
      alert("Dados inválidos.");
    }
  }

}
