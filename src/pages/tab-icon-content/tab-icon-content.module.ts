import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabIconContentPage } from './tab-icon-content';

@NgModule({
  declarations: [
    TabIconContentPage,
  ],
  imports: [
    IonicPageModule.forChild(TabIconContentPage),
  ],
  entryComponents: [
    TabIconContentPage,
  ]
})
export class TabIconContentPageModule {}
