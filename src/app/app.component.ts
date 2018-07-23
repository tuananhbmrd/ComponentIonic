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
import { Subject } from '../../node_modules/rxjs/Subject';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  activePage = new Subject();

  pages: Array<{title: string, component: any, active: boolean}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, active: true },
      { title: 'List', component: ListPage, active: false },
      { title: 'Action Sheets', component: ActionSheetsPage, active: false},
      { title: 'Alerts', component: AlertsPage, active: false},
      { title: 'Badges', component: BadgesPage, active: false},
      { title: 'Buttons', component: ButtonsPage, active: false},
      { title: 'Cards', component: CardsPage, active: false},
      { title: 'Checkbox', component: CheckboxPage, active: false},
      { title: 'DateTime', component: DateTimePage, active: false},
      { title: 'FABs', component: FabsPage, active: false},
      { title: 'Gestures', component: GesturesPage, active: false},
      { title: 'Grid', component: GridPage, active: false},
      { title: 'Icons', component: IconsPage, active: false},
      { title: 'Inputs', component: InputsPage, active: false},
      { title: 'Lists', component: ListsPage, active: false},
      { title: 'Loading', component: LoadingPage, active: false},
      { title: 'Menus', component: MenusPage, active: false},
      { title: 'Modals', component: ModalsPage, active: false},
      { title: 'Navigation', component: NavigationPage, active: false},
      { title: 'Popover', component: PopoverPage, active: false},
      { title: 'Profile', component: ProfilePage, active: false},
      { title: 'Radio', component: RadioPage, active: false},
      { title: 'SearchBar', component: SearchbarPage, active: false},
      { title: 'Segment', component: SegmentPage, active: false},
      { title: 'Select', component: SelectPage, active: false},
      { title: 'Slides', component: SlidesPage, active: false},
      { title: 'Tabs', component: TabsPage, active: false},
      { title: 'Toast', component: ToastPage, active: false},
      { title: 'Toggle', component: TogglePage, active: false},
      { title: 'Toolbar', component: ToolbarPage, active: false},
    ];

    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });

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
