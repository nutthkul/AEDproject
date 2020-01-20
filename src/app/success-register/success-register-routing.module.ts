import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessRegisterPage } from './success-register.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessRegisterPageRoutingModule {}
