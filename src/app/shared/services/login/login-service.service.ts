import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usuarios = [
    { id: 1, nome: 'Andrezza', email: 'admin@email', senha: 'senha123', perfil: 'Administrador' },
    { id: 2, nome: 'Raysa', email: 'docente1@email', senha: 'senha123', perfil: 'Docente' },
    { id: 3, nome: 'Eduarda', email: 'docente2email', senha: 'senha123', perfil: 'Docente' },
    { id: 4, nome: 'Suene', email: 'aluno1@email', senha: 'senha123', perfil: 'Aluno' },
    { id: 5, nome: 'Scheila', email: 'aluno2@email', senha: 'senha123', perfil: 'Aluno' }
  ];

  logar(email: string, senha: string): any {
    return this.usuarios.find(u => u.email === email && u.senha === senha) || null;
  }

  deslogar(): void {
    sessionStorage.removeItem('usuario');
  }
}
