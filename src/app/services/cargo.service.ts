import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, EMPTY  } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(`${API_CONFIG.baseUrl}/cargos`).pipe(
      catchError(error => {
        alert("Erro ao buscar os dados do cargo");
        console.error(error);
        return EMPTY;
      })
    );
  }
}
