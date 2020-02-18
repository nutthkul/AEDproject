import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Member2Page } from './member2.page';

const routes: Routes = [
  {
    path: '',
    component: Member2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Member2PageRoutingModule {}
