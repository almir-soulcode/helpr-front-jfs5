import { catchError } from 'rxjs/operators';
import { API_CONFIG } from './../config/api.config';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${API_CONFIG.baseUrl}/funcionarios`).pipe(
      catchError(error => {
        alert("Erro ao buscar funcionário!");
        console.error(error);
        return EMPTY;
      })
    )
  }

  public findById(id: string): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios/${id}`).pipe(
      catchError(error => {
        alert("Erro ao buscar dados de funcionários!");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public create(funcionario: Funcionario): Observable<Funcionario> {
    const data = {
      nome: funcionario.nome, 
      email: funcionario.email,
      cpf: funcionario.cpf,
      senha: funcionario.senha,
      foto: funcionario.foto,
      idCargo: funcionario.cargo.idCargo
    }
    return this.http.post<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios`, data).pipe(
      catchError(error => {
        alert("Erro ao criar novo funcionário.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public delete(id: number): Observable<Funcionario> {
    return this.http.delete<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios/${id}`).pipe(
      catchError(error => {
        alert("Erro ao excluir funcionário.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public update(funcionario: Funcionario): Observable<Funcionario> {
    const data = {
      nome: funcionario.nome, 
      email: funcionario.email,
      cpf: funcionario.cpf,
      senha: funcionario.senha,
      foto: funcionario.foto,
      idCargo: funcionario.cargo.idCargo
    }
    return this.http.put<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios/${funcionario.id}`, data).pipe(
      catchError(error => {
        alert("Erro ao editar funcionário.");
        console.error(error);
        return EMPTY;
      })
    );
  }

}
