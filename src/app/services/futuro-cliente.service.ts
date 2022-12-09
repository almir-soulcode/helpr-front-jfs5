import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { FuturoCliente } from '../models/futuro-cliente';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FuturoClienteService {
  delete(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  public findAll(): Observable<FuturoCliente[]> {
    return this.http.get<FuturoCliente[]>(`${API_CONFIG.baseUrl}/futurocliente`).pipe(
      catchError(error => {
        alert("Erro ao buscar futuro clientes");
        console.error(error);
        return EMPTY;
      })
    );
  }
}
