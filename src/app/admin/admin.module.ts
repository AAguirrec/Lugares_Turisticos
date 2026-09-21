import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/lazy';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AdminPage } from './admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: AdminPage }]),
  ],
  declarations: [AdminPage],
})
export class AdminPageModule {}
