import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAedPage } from './add-aed.page';

const routes: Routes = [
  {
    path: '',
    component: AddAedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAedPageRoutingModule {}
