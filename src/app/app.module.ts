import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConstantProvider } from '../providers/constant/constant';
import { UtilitiesProvider } from '../providers/utilities/utilities';
import { ActionSheetsPage } from '../pages/action-sheets/action-sheets';
import { AlertsPage } from '../pages/alerts/alerts';
import { BadgesPage } from '../pages/badges/badges';
import { ButtonsPage } from '../pages/buttons/buttons';
import { CardsPage } from '../pages/cards/cards';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { DateTimePage } from '../pages/date-time/date-time';
import { FabsPage } from '../pages/fabs/fabs';
import { GesturesPage } from '../pages/gestures/gestures';
import { GridPage } from '../pages/grid/grid';
import { IconsPage } from '../pages/icons/icons';
import { InputsPage } from '../pages/inputs/inputs';
import { ListsPage } from '../pages/lists/lists';
import { LoadingPage } from '../pages/loading/loading';
import { MenusPage } from '../pages/menus/menus';
import { ModalsPage } from '../pages/modals/modals';
import { NavigationPage } from '../pages/navigation/navigation';
import { PopoverPage } from '../pages/popover/popover';
import { RadioPage } from '../pages/radio/radio';
import { RangePage } from '../pages/range/range';
import { SearchbarPage } from '../pages/searchbar/searchbar';
import { SegmentPage } from '../pages/segment/segment';
import { SelectPage } from '../pages/select/select';
import { SlidesPage } from '../pages/slides/slides';
import { TabsPage } from '../pages/tabs/tabs';
import { ToastPage } from '../pages/toast/toast';
import { TogglePage } from '../pages/toggle/toggle';
import { ToolbarPage } from '../pages/toolbar/toolbar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetsPage,
    AlertsPage,
    BadgesPage,
    ButtonsPage,
    CardsPage,
    CheckboxPage,
    DateTimePage,
    FabsPage,
    GesturesPage,
    GridPage,
    IconsPage,
    InputsPage,
    ListsPage,
    LoadingPage,
    MenusPage,
    ModalsPage,
    NavigationPage,
    PopoverPage,
    RadioPage,
    RangePage,
    SearchbarPage,
    SegmentPage,
    SelectPage,
    SlidesPage,
    TabsPage,
    ToastPage,
    TogglePage,
    ToolbarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetsPage,
    AlertsPage,
    BadgesPage,
    ButtonsPage,
    CardsPage,
    CheckboxPage,
    DateTimePage,
    FabsPage,
    GesturesPage,
    GridPage,
    IconsPage,
    InputsPage,
    ListsPage,
    LoadingPage,
    MenusPage,
    ModalsPage,
    NavigationPage,
    PopoverPage,
    RadioPage,
    RangePage,
    SearchbarPage,
    SegmentPage,
    SelectPage,
    SlidesPage,
    TabsPage,
    ToastPage,
    TogglePage,
    ToolbarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConstantProvider,
    UtilitiesProvider
  ]
})
export class AppModule {}
