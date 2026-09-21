import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: false,
})
export class LoginPage {
  usuario = '';
  clave = '';

  constructor(
    private auth: AuthService,
    private nav: NavController,
    private alerta: AlertController,
  ) {}

  async ingresar(): Promise<void> {
    if (this.auth.login(this.usuario, this.clave)) {
      this.clave = '';
      await this.nav.navigateRoot('/admin');
      return;
    }

    const alert = await this.alerta.create({
      header: 'Acceso denegado',
      message: 'Usuario o contraseña incorrectos. Intenta nuevamente.',
      buttons: ['Entendido'],
    });
    await alert.present();
  }
}
