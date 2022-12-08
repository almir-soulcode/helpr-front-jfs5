import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FuncionariosComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    ComponentsModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
  ]
})
export class FuncionariosModule { }
