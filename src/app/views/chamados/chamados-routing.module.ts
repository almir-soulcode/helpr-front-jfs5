import { EditChamadoComponent } from './edit-chamado/edit-chamado.component';
import { NewChamadoComponent } from './new-chamado/new-chamado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadosComponent } from './chamados/chamados.component';

const routes: Routes = [
  {
    path: '',
    component: ChamadosComponent,
    title: "Helpr | Chamados"
  },
  {
    path: 'new',
    component: NewChamadoComponent,
    title: "Helpr | Novo Chamado"
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
