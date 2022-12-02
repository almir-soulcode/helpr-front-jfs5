import { API_CONFIG } from './../config/api.config';
import { Token } from './../models/token';
import { Credenciais } from './../models/credenciais';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwt: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  public authenticate(credenciais: Credenciais): Observable<Token> {
    return this.http.post<Token>(`${API_CONFIG.baseUrl}/auth/login`, credenciais).pipe(
      tap(token => {
        localStorage.setItem("token", token.accessToken);
      }),
      catchError(error => {
        alert("Erro ao autenticar!");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public isAuthenticate(): boolean {
    let flag: boolean = false;
    const token = localStorage.getItem("token");
    if(token) {
      flag = !this.jwt.isTokenExpired(token);
    }
    return flag;
  }
}
