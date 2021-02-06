import { Injectable } from '@angular/core';
import { TuiDay } from '@taiga-ui/cdk/date-time/day';
import { Observable } from 'rxjs';
import { AppointmentsStore } from '../../../store/appointments.store';

@Injectable()
export class CalendarService {
  constructor(private appointmentsStore: AppointmentsStore) { }

  get currentDate$(): Observable<TuiDay> {
    return this.appointmentsStore.currentDate$
  }

  selectDay(date: TuiDay): void {
    this.appointmentsStore.setStore('currentDate', date)
  }
}
