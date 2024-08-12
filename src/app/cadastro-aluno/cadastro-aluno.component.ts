import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AlunosComponent } from '../alunos/alunos.component';
import { CursoService } from '../shared/services/cursos/cursos.service';

export interface Curso {
  id: string;
  turma: string;
}

@Component({
  selector: 'app-cadastro-aluno',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.scss'
})
export class CadastroAlunoComponent implements OnInit {
  formCadastro!: FormGroup;
  cursos: Curso[] = [
    { id: '1', turma: 'FrontEnd' },
    { id: '2', turma: 'FullStack' },
    { id: '3', turma: 'BackEnd' }
  ];

  constructor(private cursoService: CursoService) {}


  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
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
