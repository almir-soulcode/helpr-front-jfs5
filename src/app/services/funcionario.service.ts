import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, EMPTY  } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionario';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }


public findAll(): Observable<Funcionario[]> {
  return this.http.get<Funcionario[]>(`${API_CONFIG.baseUrl}/funcionarios`).pipe(
    catchError(error => {
      alert("Erro ao buscar dados de funcionarios");
      console.error(error);
      return EMPTY;
    })
  );
}

public findById(id: string): Observable<Funcionario> {
  return this.http.get<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios/${id}`).pipe(
    catchError(error => {
      alert("Erro ao buscar dados de funcionario");
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
    idCargo: funcionario.cargo.idCargo,
    senha: funcionario.senha
  }
  return this.http.post<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios`, data).pipe(
    catchError(error => {
      alert("Erro ao criar novo funcionario.");
      console.error(error);
      return EMPTY;
    })
  );
}

public delete(id: number): Observable<Funcionario> {
  return this.http.delete<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios/${id}`).pipe(
    catchError(error => {
      alert("Erro ao excluir funcionario.");
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
    idCargo: funcionario.cargo.idCargo,
    senha: funcionario.senha
  }
  return this.http.put<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios/${funcionario.id}`,data).pipe(
    catchError(error => {
      alert("Erro ao inserir funcionario ");
      console.error(error);
      return EMPTY;
    })
  );
}
}