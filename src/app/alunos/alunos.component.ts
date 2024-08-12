import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule ],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss'
})
export class AlunosComponent implements OnInit {
  searchControl: FormControl = new FormControl('');
  alunos: any[] = [];
  filteredAlunos: any[] = [];

  ngOnInit(): void {
 
    this.alunos = [
      { nome: 'João Silva', cpf: '123.456.789-00', email: 'joao@exemplo.com', curso: 'Front-End' },
      { nome: 'Maria Oliveira', cpf: '987.654.321-00', email: 'maria@exemplo.com', curso: 'Back-End' }
    ];
    this.filteredAlunos = this.alunos;
  }

  pesquisar() {
    const searchValue = this.searchControl.value.toLowerCase();
    this.filteredAlunos = this.alunos.filter(aluno =>
      aluno.nome.toLowerCase().includes(searchValue) ||
      aluno.email.toLowerCase().includes(searchValue)
    );
  }

  editarAluno(aluno: any) {

  }

  excluirAluno(aluno: any) {
    if (confirm('Quer mesmo excluir este usuário?')) {
      this.alunos = this.alunos.filter(a => a !== aluno);
      this.pesquisar();
    }
  }
}
