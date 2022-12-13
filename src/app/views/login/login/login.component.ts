import { Credenciais } from './../../../models/credenciais';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public checkBoxValue: any = false;

  constructor(
    formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formLogin = formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required]]
    });
  }

  ngOnInit(): void {
    if(document.cookie !== '') {
      this.initCookiesData();
    }
  }

  public signIn(): void {
    if (this.formLogin.valid) {
      // PROCESSO DE AUTENTICAR
      const credenciais: Credenciais = this.formLogin.value;
      this.authService.authenticate(credenciais).subscribe(response => {
        alert("Bem-vindo(a)!");
        this.createCookie();
        this.router.navigate(["/home"]);
      });
    }
    else {
      alert("Dados inválidos.");
    }
  }

  public checkCheckBoxvalue() {
    console.log(this.checkBoxValue)
  }

  // Cookies
  public createCookie() {
    if (this.checkBoxValue) {
      let credenciais: Credenciais = this.formLogin.value;
      document.cookie = `email=${credenciais.email}; expires=${new Date(Date.now() + 86400000 * 30).toUTCString()}`;
      document.cookie = `senha=${credenciais.senha}; expires=${new Date(Date.now() + 86400000 * 30).toUTCString()}`;
    }
  }

  public initCookiesData() {
    // Separando o cookie em 2 partes: email e senha
    let cookieData: string[] = document.cookie.split(";");
    let emailC: string = cookieData[0];
    let senhaC: string = cookieData[1];
    emailC = emailC.substring(6, emailC.length);
    senhaC = senhaC.substring(7, senhaC.length);
    this.formLogin.setValue(
      {
        email: emailC,
        senha: senhaC
      })
  }
}
