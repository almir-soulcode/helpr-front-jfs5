import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'home'
    
  },
  {
    path: 'login',
    loadChildren: () => import("./views/login/login.module").then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    canActivate: [ AuthGuard ],
    title: "Helpr | Home"
  },
  {
    path: 'clientes',
    loadChildren: () => import('./views/clientes/clientes.module').then(m => m.ClientesModule),
    title: "Helpr | Clientes"
  },
  {
    path: 'chamados',
    loadChildren: () => import('./views/chamados/chamados.module').then(m => m.ChamadosModule),
    title: "Helpr | Chamados"
  },
  { path: 'funcionarios',
  loadChildren: () => import('./views/funcionario/funcionario.module').then(m => m.FuncionarioModule)
  },
  { path: 'cargos',
  loadChildren: () => import('./views/cargos/cargos.module').then(m => m.CargosModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
