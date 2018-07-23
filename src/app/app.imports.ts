import { BrowserModule } from "../../node_modules/@angular/platform-browser";
import { HttpModule } from "../../node_modules/@angular/http";

import { StatusBar } from "../../node_modules/@ionic-native/status-bar";
import { SplashScreen } from "../../node_modules/@ionic-native/splash-screen";
import { ConstantProvider } from "../providers/constant/constant";
import { UtilitiesProvider } from "../providers/utilities/utilities";
import { AlertService } from "../providers/utilities/alert.service";
import { CameraProvider } from "../providers/utilities/camera.provider";
import { ToastService } from "../providers/utilities/toast.service";
import { Camera } from "../../node_modules/@ionic-native/camera";

import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";
import { ActionSheetsPage } from "../pages/action-sheets/action-sheets";
import { AlertsPage } from "../pages/alerts/alerts";
import { BadgesPage } from "../pages/badges/badges";
import { ButtonsPage } from "../pages/buttons/buttons";
import { CardsPage } from "../pages/cards/cards";
import { CheckboxPage } from "../pages/checkbox/checkbox";
import { DateTimePage } from "../pages/date-time/date-time";
import { FabsPage } from "../pages/fabs/fabs";
import { GesturesPage } from "../pages/gestures/gestures";
import { GridPage } from "../pages/grid/grid";
import { IconsPage } from "../pages/icons/icons";
import { InputsPage } from "../pages/inputs/inputs";
import { ListsPage } from "../pages/lists/lists";
import { LoadingPage } from "../pages/loading/loading";
import { MenusPage } from "../pages/menus/menus";
import { ModalsPage } from "../pages/modals/modals";
import { NavigationPage } from "../pages/navigation/navigation";
import { PopoverPage } from "../pages/popover/popover";
import { RadioPage } from "../pages/radio/radio";
import { RangePage } from "../pages/range/range";
import { SearchbarPage } from "../pages/searchbar/searchbar";
import { SegmentPage } from "../pages/segment/segment";
import { SelectPage } from "../pages/select/select";
import { SlidesPage } from "../pages/slides/slides";
import { TabsPage } from "../pages/tabs/tabs";
import { ToastPage } from "../pages/toast/toast";
import { TogglePage } from "../pages/toggle/toggle";
import { ToolbarPage } from "../pages/toolbar/toolbar";
import { ProfilePage } from "../pages/profile/profile";
import { TabIconContentPage } from "../pages/tab-icon-content/tab-icon-content";
import { TabIconContentPageModule } from "../pages/tab-icon-content/tab-icon-content.module";

export const MODULES = [
    BrowserModule,
    HttpModule,
    // TabIconContentPageModule
]

export const PROVIDERS = [
    StatusBar,
    SplashScreen,
    ConstantProvider,
    UtilitiesProvider,
    AlertService,
    CameraProvider,
    ToastService,
    Camera
]

export const DIRECTIVES = [
    
]

export const PAGE = [
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
    ToolbarPage,
    ProfilePage,
    TabIconContentPage
]

