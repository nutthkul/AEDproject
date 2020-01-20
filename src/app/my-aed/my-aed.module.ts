import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAedPageRoutingModule } from './my-aed-routing.module';

import { MyAedPage } from './my-aed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAedPageRoutingModule
  ],
  declarations: [MyAedPage]
})
export class MyAedPageModule {}
