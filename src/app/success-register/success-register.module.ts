import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessRegisterPageRoutingModule } from './success-register-routing.module';

import { SuccessRegisterPage } from './success-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessRegisterPageRoutingModule
  ],
  declarations: [SuccessRegisterPage]
})
export class SuccessRegisterPageModule {}
