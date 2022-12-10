import { catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { Cargo } from 'src/app/models/cargo';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
    ) { }

  public findAll(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(`${API_CONFIG.baseUrl}/cargos`).pipe(
      catchError(error => {
        this.toastr.error("Erro ao buscar dados dos cargos");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public findById(id: string): Observable<Cargo> {
    return this.http.get<Cargo>(`${API_CONFIG.baseUrl}/cargos/${id}`).pipe(
      catchError(error => {
        this.toastr.error("Erro ao buscar dados do cargo");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public create(cargo: Cargo): Observable<Cargo> {
    return this.http.post<Cargo>(`${API_CONFIG.baseUrl}/cargos`, cargo).pipe(
      catchError(error => {
        this.toastr.error("Erro ao criar novo cargo.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public delete(id: number): Observable<Cargo> {
    return this.http.delete<Cargo>(`${API_CONFIG.baseUrl}/cargos/${id}`).pipe(
      catchError(error => {
        this.toastr.error("Erro ao excluir cargo.");
        console.error(error);
        return EMPTY;
      })
    );
  }
}

  