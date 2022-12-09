import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgxMaskModule, IConfig } from 'ngx-mask'

@NgModule({
  declarations: [
    FuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule,
    NgxMaskModule.forRoot(),
  ]
})
export class FuncionarioModule { }
export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;