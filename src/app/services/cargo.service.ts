import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Cargo } from '../models/cargo';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(`${API_CONFIG.baseUrl}/cargos`).pipe(
      catchError(error => {
        alert('Erro ao cadastrar funcionário!')
        console.error(error)
        return EMPTY
      })
    )
  }

  //findById(id: number)

  //update(id: number)

  //delete(id: number)
}
