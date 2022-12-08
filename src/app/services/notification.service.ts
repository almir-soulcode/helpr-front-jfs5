import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }
// Mais opções de notificação

  exibirMensagem(titulo:string,mesagem:string,tipo:string):void{
    this.toastr.show(mesagem,titulo, {closeButton:true,progressBar:true},tipo );

  }


  Error(e:any):void {
    this.exibirMensagem('Error!','Error de dados','toast-error');
  }
  Success(){
    this.exibirMensagem('Sucesso!','Operação Concluida','toast-success');
  }


  showSuccess() {
    this.toastr.success('Você obteve sucesso em sua operação!', 'Toastr fun!');

  }

  showError(){
    this.toastr.error('Dados Invalidos', 'Major Error');
  } 
  
}
 