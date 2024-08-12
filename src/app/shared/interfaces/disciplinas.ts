
export interface Disciplina {
  id: string;
  materia: string;
  semestre?: number; // Adicione a propriedade semestre como opcional
}

export interface DisciplinasInterface {
  cursos: Curso[];
  disciplinas: Disciplina[];
}

export interface Curso {
  id: string;
  turma: string;
}
