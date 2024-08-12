import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../shared/services/disciplina/disciplina.service';
import { CommonModule } from '@angular/common';
import { Disciplina } from '../shared/interfaces/disciplinas';

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
    const cursoId = sessionStorage.getItem('cursoId') as 'FrontEnd' | 'FullStack' | 'BackEnd' || 'FrontEnd';
    this.carregarDisciplinas(cursoId);
  }

  carregarDisciplinas(cursoId: 'FrontEnd' | 'FullStack' | 'BackEnd'): void {
    // Defina o tipo para o mapeamento de disciplinas por semestre
    const disciplinasPorSemestre: Record<number, Disciplina[]> = {
      1: this.disciplinaService.getDisciplinasCursoSemestre(cursoId, 1),
      2: this.disciplinaService.getDisciplinasCursoSemestre(cursoId, 2),
      3: this.disciplinaService.getDisciplinasCursoSemestre(cursoId, 3)
    };

    this.semestres = Object.keys(disciplinasPorSemestre).map(semestre => {
      // Converta a chave para número
      const semestreNumber = Number(semestre);
      return {
        semestre: semestreNumber,
        disciplinas: disciplinasPorSemestre[semestreNumber].map(disciplina => disciplina.materia)
      };
    });

    this.nomeCurso = this.formatarNomeCurso(cursoId);
  }

  formatarNomeCurso(cursoId: 'FrontEnd' | 'FullStack' | 'BackEnd'): string {
    switch (cursoId) {
      case 'FrontEnd': return 'Front End';
      case 'FullStack': return 'Full Stack';
      case 'BackEnd': return 'Back End';
      default: return 'Curso Desconhecido';
    }
  }
}
