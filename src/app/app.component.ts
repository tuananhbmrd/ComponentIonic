import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
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
import { SearchbarPage } from '../pages/searchbar/searchbar';
import { SegmentPage } from '../pages/segment/segment';
import { SelectPage } from '../pages/select/select';
import { SlidesPage } from '../pages/slides/slides';
import { TabsPage } from '../pages/tabs/tabs';
import { ToastPage } from '../pages/toast/toast';
import { TogglePage } from '../pages/toggle/toggle';
import { ToolbarPage } from '../pages/toolbar/toolbar';
import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Action Sheets', component: ActionSheetsPage},
      { title: 'Alerts', component: AlertsPage},
      { title: 'Badges', component: BadgesPage},
      { title: 'Buttons', component: ButtonsPage},
      { title: 'Cards', component: CardsPage},
      { title: 'Checkbox', component: CheckboxPage},
      { title: 'DateTime', component: DateTimePage},
      { title: 'FABs', component: FabsPage},
      { title: 'Gestures', component: GesturesPage},
      { title: 'Grid', component: GridPage},
      { title: 'Icons', component: IconsPage},
      { title: 'Inputs', component: InputsPage},
      { title: 'Lists', component: ListsPage},
      { title: 'Loading', component: LoadingPage},
      { title: 'Menus', component: MenusPage},
      { title: 'Modals', component: ModalsPage},
      { title: 'Navigation', component: NavigationPage},
      { title: 'Popover', component: PopoverPage},
      { title: 'Profile', component: ProfilePage},
      { title: 'Radio', component: RadioPage},
      { title: 'SearchBar', component: SearchbarPage},
      { title: 'Segment', component: SegmentPage},
      { title: 'Select', component: SelectPage},
      { title: 'Slides', component: SlidesPage},
      { title: 'Tabs', component: TabsPage},
      { title: 'Toast', component: ToastPage},
      { title: 'Toggle', component: TogglePage},
      { title: 'Toolbar', component: ToolbarPage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
