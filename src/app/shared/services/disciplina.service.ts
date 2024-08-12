import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private cursos: { [key: string]: { nome: string; semestre: number }[] } = {
    FrontEnd: [
      { nome: 'API', semestre: 1 },
      { nome: 'HTML', semestre: 1 },
      { nome: 'CSS', semestre: 2 },
      { nome: 'JAVASCRIPT', semestre: 2 },
    ],
    BackEnd: [
      { nome: 'API', semestre: 1 },
      { nome: 'JAVA', semestre: 1 },
      { nome: 'JAVA', semestre: 2 },
      { nome: 'SQL', semestre: 2 },
    ],
  };

  obterDisciplinas(cursoId: string): { semestre: number; disciplinas: string[] }[] {
    const disciplinas = this.cursos[cursoId] || [];
    const semestres: { semestre: number; disciplinas: string[] }[] = [];

    disciplinas.forEach((disciplina) => {
      let semestre = semestres.find(
        (s) => s.semestre === disciplina.semestre
      );
      if (!semestre) {
        semestre = { semestre: disciplina.semestre, disciplinas: [] };
        semestres.push(semestre);
      }
      semestre.disciplinas.push(disciplina.nome);
    });

    return semestres;
  }
}
