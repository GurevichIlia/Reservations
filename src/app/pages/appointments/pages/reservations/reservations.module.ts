import { ReservationsComponent } from './reservations.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';


@NgModule({
  declarations: [ReservationsComponent],
  imports: [
    CommonModule,
    ReservationsRoutingModule
  ]
})
export class ReservationsModule { }
