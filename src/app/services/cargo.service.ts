import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Cargo } from '../models/cargo';
import { API_CONFIG } from '../config/api.config';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private http: HttpClient,private toastr: ToastrService) { }

  public findAll(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(`${API_CONFIG.baseUrl}/cargos`).pipe(
      catchError(error => {
        this.toastr.error('Erro ao cadastrar funcionário!')
        console.error(error)
        return EMPTY
      })
    )
  }

  public create(cargo: Cargo): Observable<Cargo>{
    return this.http.post<Cargo>(`${API_CONFIG.baseUrl}/cargos`, cargo).pipe(
      catchError(error => {
        this.toastr.error(`Erro ao cadastrar cargo`)
        console.error(error)
        return EMPTY
      })
    )
  }

  public delete(id: number): Observable<Cargo>{
    return this.http.delete<Cargo>(`${API_CONFIG.baseUrl}/cargos/${id}`).pipe(
      catchError(error => {
        alert(`Erro ao excluir cargo`)
        console.error(error)
        return EMPTY
      })
    )
  }
  public update(cargo: Cargo): Observable<Cargo> {
    const cargoDTO = {
      nome: cargo.nome,
      descricao: cargo.descricao,
      salario: cargo.salario
    } 
    alert
    return this.http.put<Cargo>(`${API_CONFIG.baseUrl}/cargos/${cargo.idCargo}`, cargoDTO).pipe(
      catchError(error => {
        alert("Erro ao atualizar cargo!");
        console.error(error);
        return EMPTY;
      })
    )

  }
  public findById(id: string): Observable<Cargo> {
    return this.http.get<Cargo>(`${API_CONFIG.baseUrl}/cargos/${id}`).pipe(
      catchError(error => {
        alert("Erro ao buscar dados de cargos");
        console.error(error);
        return EMPTY;
      })
    );
  }
  //findById(id: number)

  //update(id: number)

  //delete(id: number)
}
