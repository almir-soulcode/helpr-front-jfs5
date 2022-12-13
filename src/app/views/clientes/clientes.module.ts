import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'

@NgModule({
  declarations: [
    ClientesComponent,
    NewClienteComponent,
    EditClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class ClientesModule { }
export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;
