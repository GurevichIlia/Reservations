import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';
import { AppointmentsService } from './services/appointments.service';
import { AppointmentsStore } from './store/appointments.store';



@NgModule({
  declarations: [
    AppointmentsComponent,

  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,

  ],
  providers: [
    AppointmentsService,
    AppointmentsStore

  ]
})
export class AppointmentsModule { }
