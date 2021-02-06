import { AppointmentsComponent } from './appointments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmetsRoutes } from 'src/app/core/routes/routes';

const { New, Reservations, Calendar } = AppointmetsRoutes

const routes: Routes = [
  {
    path: '', component: AppointmentsComponent, children: [
      { path: '', redirectTo: Calendar, pathMatch: 'full' },
      { path: Calendar, loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule) },
      { path: New, loadChildren: () => import('./pages/new/new.module').then(m => m.NewModule) },
      { path: Reservations, loadChildren: () => import('./pages/reservations/reservations.module').then(m => m.ReservationsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
