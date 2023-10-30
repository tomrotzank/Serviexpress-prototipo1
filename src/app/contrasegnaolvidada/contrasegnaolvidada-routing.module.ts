import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContrasegnaolvidadaPage } from './contrasegnaolvidada.page';

const routes: Routes = [
  {
    path: '',
    component: ContrasegnaolvidadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContrasegnaolvidadaPageRoutingModule {}
