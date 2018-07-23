import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the TabIconContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-icon-content',
  templateUrl: 'tab-icon-content.html',
})
export class TabIconContentPage {

  public isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabIconContentPage');
  }

}
