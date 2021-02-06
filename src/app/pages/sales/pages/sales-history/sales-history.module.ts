import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesHistoryComponent } from './sales-history.component';
import { SalesHistoryRoutingModule } from './sales-history-routing.module';



@NgModule({
  declarations: [SalesHistoryComponent],
  imports: [
    CommonModule,
    SalesHistoryRoutingModule
  ]
})
export class SalesHistoryModule { }
