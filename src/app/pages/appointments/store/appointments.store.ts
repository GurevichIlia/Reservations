import { Logger } from './../../../core/classes/Logger';
import { Injectable, Type } from '@angular/core';
import { TuiDay } from '@taiga-ui/cdk';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export interface AppointmentsStoreInterface {
  currentDate: TuiDay,
}
const initialState: AppointmentsStoreInterface = {
  currentDate: createDefaultTuiDateAsToday()
}

@Injectable()
export class AppointmentsStore {
  private readonly _store = new BehaviorSubject<AppointmentsStoreInterface>(initialState)
  readonly store$ = this._store.asObservable()
  readonly currentDate$ = this.store$.pipe(map(store => store.currentDate), distinctUntilChanged())


  setStore(property: keyof AppointmentsStoreInterface, value: AppointmentsStoreInterface[keyof AppointmentsStoreInterface]): void {
    const updatedState = {
      ...this._store.getValue(),
      [property]: value
    }
    const oldState = this._store.getValue()
    this._store.next(updatedState)

    Logger.storeLog<AppointmentsStoreInterface, AppointmentsStore>(
      oldState,
      updatedState,
      property,
      AppointmentsStore)
  }
}





function createDefaultTuiDateAsToday(): TuiDay {
  const date = new Date()

  const day = date.getDay()
  const month = date.getMonth()
  const year = date.getFullYear()

  return new TuiDay(year, month, day)
}
