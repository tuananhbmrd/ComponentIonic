import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { MODULES, PROVIDERS, PAGE } from './app.imports';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsPageModule } from '../pages/tabs/tabs.module';

@NgModule({
  declarations: [
    MyApp,
    PAGE,
    TabsPage
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp, {
        scrollAssist: true,
        autoFocusAssist: true
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PAGE
  ],
  providers: [
    PROVIDERS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class AppModule {}
