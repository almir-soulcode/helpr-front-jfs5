import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargosComponent } from './cargos/cargos.component';
import { NewCargoComponent } from './new-cargo/new-cargo.component';

const routes: Routes = [
  { 
    path: '', component: CargosComponent 
  },
  {
    path: 'new',
    component: NewCargoComponent
  },
  {
    path: 'edit/:id',
    component: CargosComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargosRoutingModule { }
