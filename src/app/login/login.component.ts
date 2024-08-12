import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../shared/services/login/login-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
    });
  }

  entrar() {
    if (this.formLogin.valid) {
      const { email, senha } = this.formLogin.value;
      const usuario = this.loginService.logar(email, senha);

      if (usuario) {
        sessionStorage.setItem('usuario', JSON.stringify(usuario));
        this.router.navigate(['/home']);
      } else {
        window.alert('Usuário ou senha inválidos');
      }
    }
  }

  esqueciSenha() {
    window.alert('Processo de recuperação de senha enviado para o e-mail cadastrado!');
  }
}

