import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cargo } from '../models/cargo';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(`${API_CONFIG.baseUrl}/funcionarios`).pipe(
      catchError(error => {
        alert('Erro ao buscar funcionários!')
        console.error(error)
        return EMPTY
      })
    )
  }

  public save(funcionario: Funcionario): Observable<Funcionario> {
    const funcionarioDTO = {
      nome: funcionario.nome,
      email: funcionario.email,
      cpf: funcionario.cpf,
      senha: funcionario.senha,
      foto: funcionario.foto,
      idCargo: funcionario.cargo.idCargo
    }    
    return this.http.post<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios`, funcionarioDTO).pipe(
      catchError(error => {
        alert('Erro ao cadastrar funcionário!')
        console.error(error)
        return EMPTY
      })
    )
  }

  public findById(id: string): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios/${id}`).pipe(
      catchError(error => {
        alert("Erro ao buscar funcionário por id!");
        console.error(error);
        return EMPTY;
      })
    )
  }

  public update(funcionario: Funcionario): Observable<Funcionario> {
    const funcionarioDTO = {
      nome: funcionario.nome,
      email: funcionario.email,
      cpf: funcionario.cpf,
      senha: funcionario.senha,
      foto: funcionario.foto,
      idCargo: funcionario.cargo.idCargo
    } 
    alert
    return this.http.put<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios/${funcionario.id}`, funcionarioDTO).pipe(
      catchError(error => {
        alert("Erro ao atualizar funcionário!");
        console.error(error);
        return EMPTY;
      })
    )

  }

  public delete(id: number): Observable<Funcionario> {
    return this.http.delete<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios/${id}`).pipe(
      catchError(error => {
        alert("Erro ao excluir funcionário!");
        console.error(error);
        return EMPTY;
      })
    )
  }
}
