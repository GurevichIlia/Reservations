import { TuiDay } from '@taiga-ui/cdk/date-time/day';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarService } from './services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  currentDate$: Observable<TuiDay> = this.calendarServie.currentDate$
  constructor(private calendarServie: CalendarService) { }

  ngOnInit(): void {
  }

  selectDay(date: TuiDay): void {
    this.calendarServie.selectDay(date)
  }
}
