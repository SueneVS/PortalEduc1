import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../shared/services/disciplina/disciplina.service';
import { Disciplina } from '../shared/interfaces/disciplinas';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'

})

export class HomeComponent implements OnInit {
  proximasAtividades = [
    { titulo: 'Entrega de trabalho da disciplina API', descricao: 'Envio do trabalho para a disciplina de API.', data: '25/08/2024' },
    { titulo: 'Avaliação da disciplina CSS', descricao: 'Avaliação sobre os conceitos de CSS.', data: '28/08/2024' },
    { titulo: 'Chat com o mentor', descricao: 'Conversa com o mentor para orientação.', data: '31/08/2024' }
  ];

  minhasDisciplinas: Disciplina[] = [];
  cursosExtras = [
    { nome: 'Curso de Angular', descricao: 'Curso para aprimorar conhecimentos em Angular.' },
    { nome: 'Curso de TypeScript', descricao: 'Curso sobre TypeScript para desenvolvimento web.' }
  ];

  constructor(private disciplinaService: DisciplinaService) {}

  ngOnInit(): void {
    const cursoId = sessionStorage.getItem('cursoId') as 'FrontEnd' | 'FullStack' | 'BackEnd' || 'FrontEnd';
    this.minhasDisciplinas = this.disciplinaService.getDisciplinasCurso(cursoId);
  }
}
