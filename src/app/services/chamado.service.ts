import { catchError } from 'rxjs/operators';
import { API_CONFIG } from './../config/api.config';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chamado } from '../models/chamado';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${API_CONFIG.baseUrl}/chamados`).pipe(
      catchError(error => {
        alert("Erro ao buscar dados de chamados.");
        console.error(error);
        return EMPTY;
      })
    );
  }
}
