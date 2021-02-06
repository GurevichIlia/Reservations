import { sidebarMenu } from './../models/sidebar-menu.model';
import { SidebarMenu } from './../classes/SidebarMenu';
import { InjectionToken, Provider } from '@angular/core';
import { Observable, of } from 'rxjs';

export const SIDEBAR_MENU = new InjectionToken<Observable<SidebarMenu[]>>('sidebar-menu')

export const SIDEBAR_MENU_PROVIDER: Provider = {
  provide: SIDEBAR_MENU,
  useValue: of(sidebarMenu)
}
