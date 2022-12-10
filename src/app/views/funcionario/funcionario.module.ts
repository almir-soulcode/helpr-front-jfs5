import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { NewFuncionarioComponent } from './new-funcionario/new-funcionario.component';
import { EditFuncionarioComponent } from './edit-funcionario/edit-funcionario.component';


@NgModule({
  declarations: [
    FuncionarioComponent,
    NewFuncionarioComponent,
    EditFuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule
  ]
})
export class FuncionarioModule { }
