import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuturosClientesRoutingModule } from './futuros-clientes-routing.module';
import { FuturosClientesComponent } from './futuros-clientes/futuros-clientes.component';
import { ComponentsModule } from "../../components/components.module";
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        FuturosClientesComponent
    ],
    imports: [
        CommonModule,
        FuturosClientesRoutingModule,
        ComponentsModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class FuturosClientesModule { }
