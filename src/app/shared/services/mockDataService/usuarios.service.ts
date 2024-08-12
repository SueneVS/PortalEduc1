import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuariosInterface } from '../../interfaces/usuarios';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private data = {
    usuarios: [
      {
        id: 1,
        nome: 'Andrezza',
        email: 'admin@email',
        senha: 'senha123',
        celular: '554899999999',
        idade: '32',
        perfil: 'Administrador',
        img: 'https://randomuser.me/api/portraits/women/46.jpg'
      },
      {
        id: 2,
        nome: 'Raysa',
        email: 'docente1@email',
        senha: 'senha123',
        celular: '554898888888',
        idade: '32',
        perfil: 'Docente',
        img: 'https://randomuser.me/api/portraits/women/45.jpg'
      },
      {
        id: 3,
        nome: 'Eduarda',
        email: 'docente2email',
        senha: 'senha123',
        celular: '554897777777',
        idade: '32',
        perfil: 'Docente',
        img: 'https://randomuser.me/api/portraits/women/42.jpg'
      },
      {
        id: 4,
        nome: 'Suene',
        email: 'aluno1@email',
        senha: 'senha123',
        celular: '554896666666',
        idade: '32',
        perfil: 'Aluno',
        img: 'https://randomuser.me/api/portraits/women/47.jpg'
      },
      {
        id: 5,
        nome: 'Scheila',
        email: 'aluno2@email',
        senha: 'senha123',
        celular: '554895555555',
        idade: '32',
        perfil: 'Aluno',
        img: 'https://randomuser.me/api/portraits/women/48.jpg'
      }
    ],
    cursos: [
      {
        id: '1',
        turma: 'FrontEnd'
      },
      {
        id: '2',
        turma: 'FullStack'
      },
      {
        id: '3',
        turma: 'BackEnd'
      }
    ],
    disciplinas: [
      {
        id: '1',
        materia: 'HTML'
      },
      {
        id: '2',
        materia: 'CSS'
      },
      {
        id: '3',
        materia: 'Angular'
      },
      {
        id: '4',
        materia: 'React'
      },
      {
        id: '5',
        materia: 'JavaScript'
      },
      {
        id: '6',
        materia: 'TypeScript'
      }
    ]
  };

  getUsuarios(): Observable<any[]> {
    return of(this.data.usuarios);
  }

  getUsuarioByEmail(email: string): Observable<any> {
    const usuario = this.data.usuarios.find(u => u.email === email);
    return of(usuario);
  }

  getCursos(): Observable<any[]> {
    return of(this.data.cursos);
  }

  getDisciplinas(): Observable<any[]> {
    return of(this.data.disciplinas);
  }

  constructor() {}

  logar(email: string, senha: string): boolean {
    const usuario = this.data.usuarios.find(u => u.email === email && u.senha === senha);
    if (usuario) {
      sessionStorage.setItem('usuario', JSON.stringify(usuario));
      return true;
    } else {
      return false;
    }
  }

  deslogar(): void {
    sessionStorage.removeItem('usuario');
  }

  getUsuarioLogado() {
    return JSON.parse(sessionStorage.getItem('usuario') || 'null');
  }
}
