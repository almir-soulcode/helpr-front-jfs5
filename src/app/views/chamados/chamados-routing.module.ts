import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadosComponent } from './chamados/chamados.component';

const routes: Routes = [{ path: '', component: ChamadosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamadosRoutingModule { }
