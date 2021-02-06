import { MainRoutes } from './../../core/routes/routes';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const { Appointments, Sales } = MainRoutes

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', redirectTo: Appointments, pathMatch: 'full' },
      { path: Appointments, loadChildren: () => import('./../appointments/appointments.module').then(m => m.AppointmentsModule) },
      { path: Sales, loadChildren: () => import('./../sales/sales.module').then(m => m.SalesModule) }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
