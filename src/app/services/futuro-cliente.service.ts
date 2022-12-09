import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { FuturoCliente } from '../models/futuro-cliente';

@Injectable({
  providedIn: 'root'
})
export class FuturoClienteService {
  constructor(private http: HttpClient,
    private toastr: ToastrService) { }

  public findAll(): Observable<FuturoCliente[]> {
    return this.http.get<FuturoCliente[]>(`${API_CONFIG.baseUrl}/futuros-clientes`).pipe(
      catchError(error => {
        this.toastr.error("Erro ao buscar futuro cliente!");
        console.error(error);
        return EMPTY;
      })
    )
  }

  
}
