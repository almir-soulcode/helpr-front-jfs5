import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { AvatarPipe } from 'src/app/pipes/avatar.pipe';
import { NewFuncionarioComponent } from './new-funcionario/new-funcionario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditFuncionarioComponent } from './edit-funcionario/edit-funcionario.component';


@NgModule({
  declarations: [
    FuncionariosComponent,
    AvatarPipe,
    NewFuncionarioComponent,
    EditFuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    MaterialModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class FuncionariosModule { }
