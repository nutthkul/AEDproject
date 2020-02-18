import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessAedPageRoutingModule } from './success-aed-routing.module';

import { SuccessAedPage } from './success-aed.page';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessAedPageRoutingModule
  ],
  declarations: [SuccessAedPage]
})
export class SuccessAedPageModule {}
