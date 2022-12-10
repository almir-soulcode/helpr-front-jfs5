import { RouterModule } from '@angular/router';
import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DetailsCargoComponent } from './details-cargo/details-cargo.component';
import { DetailsClientesComponent } from './details-clientes/details-clientes.component';
import { DetailsChamadosComponent } from './details-chamados/details-chamados.component';

@NgModule({
  declarations: [
    NavBarComponent,
    DetailsCargoComponent,
    DetailsClientesComponent,
    DetailsChamadosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class ComponentsModule { }
