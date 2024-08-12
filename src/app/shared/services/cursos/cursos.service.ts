import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private cursos = [
    { id: '1', turma: 'FrontEnd' },
    { id: '2', turma: 'FullStack' },
    { id: '3', turma: 'BackEnd' }
  ];

  getCursos() {
    return this.cursos;
  }
}
