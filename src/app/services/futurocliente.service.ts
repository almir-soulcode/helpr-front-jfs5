import { HttpClient } from '@angular/common/http';
import { EmptyExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { FuturoCliente } from '../models/futurocliente';

@Injectable({
  providedIn: 'root'
})
export class FuturoclienteService {

  constructor(
    private http: HttpClient
  ) { }

  public findAll(): Observable<FuturoCliente[]> {
    return this.http.get<FuturoCliente[]>(`${API_CONFIG.baseUrl}/clientes/futuros`).pipe(
      catchError(error => {
        alert("Futuros clientes não encontrados");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public findById(id: string): Observable<FuturoCliente> {
    return this.http.get<FuturoCliente>(`${API_CONFIG.baseUrl}/clientes/futuros${id}`).pipe(
      catchError(error => {
        alert("Não foi possível encontrar futuro cliente");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public create(futuroCliente: FuturoCliente): Observable<FuturoCliente> {
    return this.http.post<FuturoCliente>(`${API_CONFIG.baseUrl}/clientes/futuros`, futuroCliente).pipe(
      catchError(error => {
        alert("Não foi possível criar futuro cliente");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public delete(id: number): Observable<FuturoCliente> {
    return this.http.delete<FuturoCliente>(`${API_CONFIG.baseUrl}/clientes/futuros/${id}`).pipe(
      catchError(error => {
        alert("Não foi possível deletar");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public update(futuroCliente: FuturoCliente): Observable<FuturoCliente> {
    return this.http.put<FuturoCliente>(`${API_CONFIG.baseUrl}/clientes/futuros${futuroCliente.idFuturoCliente}`, futuroCliente).pipe(
      catchError(error => {
        alert("Erro ao editar cliente.");
        return EMPTY;
      })
    );
  }
}
