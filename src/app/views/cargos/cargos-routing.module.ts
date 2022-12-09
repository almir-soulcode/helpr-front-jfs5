import { EditCargoComponent } from './edit-cargo/edit-cargo.component';
import { NewCargoComponent } from './new-cargo/new-cargo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargosComponent } from './cargos/cargos.component';

const routes: Routes = [
  {
    path: '', component: CargosComponent
  },
  {
    path: 'new-cargo',
    component: NewCargoComponent,
    title: "Helpr | Novo Cargo"
  },
  {
    path: 'edit-cargo/:idCargo',
    component: EditCargoComponent,
    title: "Helpr | Editar Cargo"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargosRoutingModule { }
