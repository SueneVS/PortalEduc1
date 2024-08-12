import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  username: string = '';
  userAvatar: string = '';
  menuOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('usuario') || '{}');
    this.username = user.nome || 'Usuário';
    this.userAvatar = user.img || '/assets/avatar.png'; 
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  logout(): void {
    sessionStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }
}
