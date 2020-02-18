import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAedPageRoutingModule } from './add-aed-routing.module';

import { AddAedPage } from './add-aed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAedPageRoutingModule
  ],
  declarations: [AddAedPage]
})
export class AddAedPageModule {}
