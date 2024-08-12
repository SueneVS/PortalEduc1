import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AlunosComponent } from '../alunos/alunos.component';

@Component({
  selector: 'app-cadastro-aluno',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.scss'
})
export class CadastroAlunoComponent implements OnInit {
  formCadastro!: FormGroup;

  ngOnInit(): void {
    this.formCadastro = new FormGroup({
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),
      curso: new FormControl('', Validators.required)
  });
}

  cadastrar() {
    if(this.formCadastro.valid){
      alert('Usuário salvo com sucesso');
    } else {
      this.formCadastro.markAllAsTouched();
    }
  }
}
