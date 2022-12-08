import { catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient,
    private toastr: ToastrService
    ) { }

  public findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${API_CONFIG.baseUrl}/clientes`).pipe(
      catchError(error => {
        this.toastr.error("Erro ao buscar dados de clientes");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public findById(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${API_CONFIG.baseUrl}/clientes/${id}`).pipe(
      catchError(error => {
        this.toastr.error("Erro ao buscar dados de cliente");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${API_CONFIG.baseUrl}/clientes`, cliente).pipe(
      catchError(error => {
        this.toastr.error("Erro ao criar novo cliente.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${API_CONFIG.baseUrl}/clientes/${id}`).pipe(
      catchError(error => {
        this.toastr.error("Erro ao excluir cliente.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${API_CONFIG.baseUrl}/clientes/${cliente.id}`, cliente).pipe(
      catchError(error => {
        this.toastr.error("Erro ao editar cliente.");
        console.error(error);
        return EMPTY;
      })
    );
  }
}
