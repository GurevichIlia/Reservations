import { SidebarMenu } from './../../classes/SidebarMenu';
import { Component, Inject, OnInit } from '@angular/core';
import { SIDEBAR_MENU, SIDEBAR_MENU_PROVIDER } from '../../providers/sidebar-menu.provider';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [SIDEBAR_MENU_PROVIDER]
})
export class SidebarComponent implements OnInit {

  constructor(
    @Inject(SIDEBAR_MENU) private readonly _menuList$: Observable<SidebarMenu[]>

    ) { }

  ngOnInit(): void {
  }

  get menuList$(): Observable<SidebarMenu[]> {
    return this._menuList$
  }

}
