import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LUGARES, Lugar } from '../data/lugares';

// Cambiar por el nombre y apellido del estudiante.
const ESTUDIANTE = 'Andres Aguirre';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  readonly titulo = `Esta es la aplicación telemática de ${ESTUDIANTE}`;
  readonly lugares: Lugar[] = LUGARES;

  constructor(private router: Router) {}

  irALogin(): void {
    this.router.navigate(['/login']);
  }
}
