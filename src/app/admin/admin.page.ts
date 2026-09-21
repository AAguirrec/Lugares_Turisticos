import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { LUGARES, Lugar } from '../data/lugares';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.page.html',
  styleUrls: ['admin.page.scss'],
  standalone: false,
})
export class AdminPage {
  readonly categorias = ['Playa / Costa', 'Montaña', 'Río', 'Arqueológico', 'Isla'];
  readonly lugares: Lugar[] = LUGARES;

  nombre = '';
  descripcion = '';
  categoria = this.categorias[0];

  constructor(
    private auth: AuthService,
    private nav: NavController,
    private alerta: AlertController,
  ) {}

  limpiar(): void {
    this.nombre = '';
    this.descripcion = '';
    this.categoria = this.categorias[0];
  }

  // Simulación: no se persiste nada, solo se muestra la alerta.
  async agregarLugar(): Promise<void> {
    const alert = await this.alerta.create({
      header: 'Lugar agregado',
      message: 'Lugar agregado con éxito (Simulación).',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

  async confirmarEliminar(lugar: Lugar): Promise<void> {
    const alert = await this.alerta.create({
      header: '¿Está seguro de eliminar este lugar?',
      message: `Se eliminará "${lugar.nombre}".`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.mostrarEliminado();
          },
        },
      ],
    });
    await alert.present();
  }

  private async mostrarEliminado(): Promise<void> {
    const alert = await this.alerta.create({
      header: 'Eliminado',
      message: 'Registro eliminado (Simulación).',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

  async cerrarSesion(): Promise<void> {
    this.auth.logout();
    await this.nav.navigateRoot('/home');
  }
}
