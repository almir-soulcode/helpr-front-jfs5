import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuturosClientesComponent } from './futuros-clientes/futuros-clientes.component';

const routes: Routes = [
  { 
    path: '', 
    component: FuturosClientesComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuturosClientesRoutingModule { }
