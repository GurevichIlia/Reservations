import { TuiMonth } from '@taiga-ui/cdk/date-time/month';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TuiDay } from '@taiga-ui/cdk';



@Component({
  selector: 'app-month-calendar',
  templateUrl: './month-calendar.component.html',
  styleUrls: ['./month-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthCalendarComponent implements OnInit {
  @Input() currentDate: TuiDay | null = null;
  @Output() selectDay = new EventEmitter<TuiDay>()
  constructor() { }

  ngOnInit(): void {

  }

  onDayClick(day: TuiDay): void {
    this.selectDay.emit(day)
  }

  monthChange({ year, month }: TuiMonth) {
    if (this.currentDate?.day) {
      this.selectDay.emit(new TuiDay(year, month, this.currentDate?.day))

    }
  }

}
