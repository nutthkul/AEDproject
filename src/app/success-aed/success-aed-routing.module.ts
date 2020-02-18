import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessAedPage } from './success-aed.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessAedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessAedPageRoutingModule {}
