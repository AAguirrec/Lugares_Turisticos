import { Injectable } from '@angular/core';

// Credenciales fijas (simulación local, sin servidor).
const USUARIO = 'admin';
const CLAVE = '1234';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private autenticado = false;

  login(usuario: string, clave: string): boolean {
    this.autenticado = usuario.trim() === USUARIO && clave === CLAVE;
    return this.autenticado;
  }

  logout(): void {
    this.autenticado = false;
  }

  get estaAutenticado(): boolean {
    return this.autenticado;
  }
}
