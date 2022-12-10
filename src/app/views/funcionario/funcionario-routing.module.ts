import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFuncionarioComponent } from './edit-funcionario/edit-funcionario.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { NewFuncionarioComponent } from './new-funcionario/new-funcionario.component';

const routes: Routes = [
  { 
    path: '', 
    component: FuncionarioComponent 
  },
  {
    path: 'new',
    component: NewFuncionarioComponent    
  },
  {
    path: 'edit/:id',
    component: EditFuncionarioComponent    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }  
