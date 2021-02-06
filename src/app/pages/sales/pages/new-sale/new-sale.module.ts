import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSaleComponent } from './new-sale.component';
import { NewSaleRoutingModule } from './new-sale-routing.module';



@NgModule({
  declarations: [NewSaleComponent],
  imports: [
    CommonModule,
    NewSaleRoutingModule
  ]
})
export class NewSaleModule { }
