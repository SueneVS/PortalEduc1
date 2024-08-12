import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
  });
}

  entrar() {    if (this.formLogin.valid) {

    const usuario = {
      email: this.formLogin.value.email,
      cursoId: 'A', 
    };
    sessionStorage.setItem('usuario', JSON.stringify(usuario));
    this.router.navigate(['/disciplinas']);
  }
}

  esqueciSenha() {
    window.alert(
      'Processo de recuperação de senha enviado para o e-mail cadastrado!'
    );
  }

}

