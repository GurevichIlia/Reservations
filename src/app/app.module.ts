import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { iconsPathFactory, TuiDialogModule, TuiNotificationsModule, TuiRootModule, TUI_ICONS_PATH } from '@taiga-ui/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TuiRootModule,
    TuiNotificationsModule,
    TuiDialogModule,
    CoreModule
  ],
  providers: [
    {
      provide: TUI_ICONS_PATH,
      useValue: iconsPathFactory('assets/taiga-ui/icons/'),
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
