import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  userPerfil: string | null = null;

  constructor() {}

  ngOnInit(): void {

    const user = sessionStorage.getItem('usuario');
    if (user) {
      const userObj = JSON.parse(user);
      this.userPerfil = userObj.perfil;
    }
    console.log('User Perfil:', this.userPerfil);
  }

  Admin(): boolean {
    return this.userPerfil === 'Administrador';
  }

  Docente(): boolean {
    return this.userPerfil === 'Docente';
  }

  Aluno(): boolean {
    return this.userPerfil === 'Aluno';
  }

}
