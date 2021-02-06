import { NewComponent } from './new.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';


@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule
  ]
})
export class NewModule { }
