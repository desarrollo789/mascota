import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FierasPage } from './fieras.page';

const routes: Routes = [
  {
    path: '',
    component: FierasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FierasPageRoutingModule {}
