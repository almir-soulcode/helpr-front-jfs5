import { NewChamadoComponent } from './new-chamado/new-chamado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadosComponent } from './chamados/chamados.component';
import { EditChamadoComponent } from './edit-chamado/edit-chamado.component';

const routes: Routes = [
  {
    path: '',
    component: ChamadosComponent
  },
  {
    path: 'new',
    component: NewChamadoComponent
  },
  {
    path: 'edit/:id',
    component: EditChamadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamadosRoutingModule { }
