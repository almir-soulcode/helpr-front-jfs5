import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargosRoutingModule } from './cargos-routing.module';
import { CargosComponent } from './cargos/cargos.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    CargosComponent
  ],
  imports: [
    CommonModule,
    CargosRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class CargosModule { }
