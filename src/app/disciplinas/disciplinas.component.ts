import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../shared/services/disciplina.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.scss'
})
export class DisciplinasComponent implements OnInit {
  nomeCurso: string = '';
  semestres: { semestre: number; disciplinas: string[] }[] = [];

  constructor(private disciplinaService: DisciplinaService) {}

  ngOnInit(): void {

    const cursoId = sessionStorage.getItem('cursoId') || 'FrontEnd';


    this.carregarDisciplinas(cursoId);
  }

  carregarDisciplinas(cursoId: string): void {
    const disciplinas = this.disciplinaService.obterDisciplinas(cursoId);
    this.semestres = disciplinas;


    this.nomeCurso = this.formatarNomeCurso(cursoId);
  }

  formatarNomeCurso(cursoId: string): string {
    switch (cursoId) {
      case 'FrontEnd': return 'Front End';
      case 'BackEnd': return 'Back End';
      default: return 'Curso Desconhecido';
    }
  }
}
