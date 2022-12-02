import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';


@NgModule({
  declarations: [
    ClientesComponent,
    NewClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
