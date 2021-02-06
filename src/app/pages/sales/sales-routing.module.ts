import { SalesComponent } from './sales.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesRoutes } from 'src/app/core/routes/routes';

const { Invoices, New_Sale, Sales_History } = SalesRoutes

const routes: Routes = [
  {
    path: '', component: SalesComponent, children: [
      { path: '', redirectTo: New_Sale, pathMatch: '' },
      { path: New_Sale, loadChildren: () => import('./pages/new-sale/new-sale.module').then(m => m.NewSaleModule) },
      { path: Invoices, loadChildren: () => import('./pages/invoices/invoices.module').then(m => m.InvoicesModule) },
      { path: Sales_History, loadChildren: () => import('./pages/sales-history/sales-history.module').then(m => m.SalesHistoryModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
