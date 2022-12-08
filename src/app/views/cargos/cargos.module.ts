import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargosRoutingModule } from './cargos-routing.module';
import { CargosComponent } from './cargos/cargos.component';
import { ComponentsModule } from "../../components/components.module";


@NgModule({
    declarations: [
        CargosComponent,
    ],
    imports: [
        CommonModule,
        CargosRoutingModule,
        ComponentsModule,
        MaterialModule,
        FormsModule,
        ComponentsModule,

    ]
})
export class CargosModule { }
