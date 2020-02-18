import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAed2PageRoutingModule } from './add-aed2-routing.module';

import { AddAed2Page } from './add-aed2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAed2PageRoutingModule
  ],
  declarations: [AddAed2Page]
})
export class AddAed2PageModule {}
