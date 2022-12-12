import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamadosRoutingModule } from './chamados-routing.module';
import { ChamadosComponent } from './chamados/chamados.component';
import { NewChamadoComponent } from './new-chamado/new-chamado.component';


@NgModule({
  declarations: [
    ChamadosComponent,
    NewChamadoComponent
  ],
  imports: [
    CommonModule,
    ChamadosRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class ChamadosModule { }
