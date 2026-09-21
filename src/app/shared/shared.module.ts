import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugarItemComponent } from './lugar-item/lugar-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LugarItemComponent],
  exports: [LugarItemComponent],
})
export class SharedModule {}
