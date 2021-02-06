import { AppRoutes } from './../routes/routes';

export class SidebarMenu {
  private _isOpen = false
  constructor(
    private label: string,
    private route: AppRoutes,
    private icon?: string,
    private children?: SidebarMenu[]
  ) {

  }

  get hasChildren(): boolean {
    return this.children && this.children.length > 0 ? true : false
  }

  get isOpen() {
    return this._isOpen
  }

  toggle(): void {
    this._isOpen = !this._isOpen
  }


}
