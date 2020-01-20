import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAedPage } from './my-aed.page';

const routes: Routes = [
  {
    path: '',
    component: MyAedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAedPageRoutingModule {}
