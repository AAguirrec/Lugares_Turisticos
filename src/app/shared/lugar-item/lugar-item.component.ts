import { Component, Input } from '@angular/core';
import { Lugar } from '../../data/lugares';

@Component({
  selector: 'app-lugar-item',
  templateUrl: './lugar-item.component.html',
  styleUrls: ['./lugar-item.component.scss'],
  standalone: false,
})
export class LugarItemComponent {
  @Input({ required: true }) lugar!: Lugar;
  @Input() alterno = false;
}
