import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-edit-cargo',
  templateUrl: './edit-cargo.component.html',
  styleUrls: ['./edit-cargo.component.css']
})
export class EditCargoComponent implements OnInit {

  public cargo: Cargo = {
    nome: '',
    descricao: '',
    salario: 0
  };

  constructor(
    private cargoService: CargoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.inizializeFields()
  }
  
  inizializeFields(): void {
    const id: string | null = this.route.snapshot.paramMap.get('idCargo')
    if(id) {
      this.cargoService.findById(id).subscribe(
        (cargos) => {this.cargo = cargos}
      )
    }
    
  }
  
  public update(formEdit: NgForm){
    if(formEdit.valid) {
      this.cargoService.update(this.cargo).subscribe(
        (ok)=> {
          alert('cargo salvo com sucesso!')
          this.router.navigateByUrl('/cargos')
        }
      )
    } else {
      alert('dados inválidos!')
    }
    
  }
}
