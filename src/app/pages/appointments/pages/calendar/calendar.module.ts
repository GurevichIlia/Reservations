import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { MonthCalendarComponent } from '../../components/calendar/month-calendar.component';
import { TuiCalendarModule } from '@taiga-ui/core';
import { CalendarService } from './services/calendar.service';


@NgModule({
  declarations: [
    CalendarComponent,
    MonthCalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    TuiCalendarModule
  ],
  providers: [CalendarService]
})
export class CalendarModule { }
