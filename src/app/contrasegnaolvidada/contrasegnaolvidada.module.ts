import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContrasegnaolvidadaPageRoutingModule } from './contrasegnaolvidada-routing.module';

import { ContrasegnaolvidadaPage } from './contrasegnaolvidada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContrasegnaolvidadaPageRoutingModule
  ],
  declarations: [ContrasegnaolvidadaPage]
})
export class ContrasegnaolvidadaPageModule {}
