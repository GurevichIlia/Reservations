import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from 'src/app/core/layouts/sidebar/sidebar.component';


@NgModule({
  declarations: [HomeComponent, SidebarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
