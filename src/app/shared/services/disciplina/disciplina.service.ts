import { Injectable } from '@angular/core';
import { Disciplina, DisciplinasInterface } from '../../interfaces/disciplinas';

type Materia = 'HTML' | 'CSS' | 'JavaScript' | 'Angular' | 'React' | 'TypeScript';

// Define o mapeamento de semestre
const semestreMap: Record<Materia, number> = {
  'HTML': 1,
  'CSS': 1,
  'JavaScript': 2,
  'Angular': 2,
  'React': 3,
  'TypeScript': 3
};


@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private data: DisciplinasInterface = {
    cursos: [
      { id: '1', turma: 'FrontEnd' },
      { id: '2', turma: 'FullStack' },
      { id: '3', turma: 'BackEnd' }
    ],
    disciplinas: [
      { id: '1', materia: 'HTML' },
      { id: '2', materia: 'CSS' },
      { id: '3', materia: 'Angular' },
      { id: '4', materia: 'React' },
      { id: '5', materia: 'JavaScript' },
      { id: '6', materia: 'TypeScript' }
    ]
  };

  getDisciplinasCurso(cursoId: 'FrontEnd' | 'FullStack' | 'BackEnd'): Disciplina[] {
    // Exemplo fixo para simplificação; ajuste conforme necessário
    const disciplinas = this.data.disciplinas.map(disciplina => ({
      ...disciplina,
      semestre: this.mapMateriaToSemestre(disciplina.materia)
    }));

    return disciplinas;
  }

  getDisciplinasCursoSemestre(cursoId: 'FrontEnd' | 'FullStack' | 'BackEnd', semestre: number): Disciplina[] {
    // Filtra as disciplinas pelo semestre especificado
    return this.getDisciplinasCurso(cursoId).filter(disciplina => disciplina.semestre === semestre);
  }

  private mapMateriaToSemestre(materia: string): number | undefined {
    const semestre = semestreMap[materia as Materia];
    return semestre;
  }
}
