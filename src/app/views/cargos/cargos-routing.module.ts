import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargosComponent } from './cargos/cargos.component';
import { EditCargoComponent } from './edit-cargo/edit-cargo.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { 
    path: '',
    component: CargosComponent
  },
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'edit/:idCargo',
    component: EditCargoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargosRoutingModule { }
