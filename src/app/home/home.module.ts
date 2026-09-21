import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular/lazy';
import { SharedModule } from '../shared/shared.module';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, SharedModule, HomePageRoutingModule],
  declarations: [HomePage],
})
export class HomePageModule {}
