import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent,
    title: "Helpr | Clientes"
  },
  {
    path: 'new',
    component: NewClienteComponent,
    title: "Helpr | Novo Cliente"
  },
  {
    path: 'edit/:id',
    component: EditClienteComponent,
    title: "Helpr | Editar Cliente"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
