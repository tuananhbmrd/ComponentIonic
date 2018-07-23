import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavigationDetailsPage } from '../navigation-details/navigation-details';
import { ConstantProvider } from '../../providers/constant/constant';

/**
 * Generated class for the NavigationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html',
})
export class NavigationPage {

  public items : any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public constant: ConstantProvider) {
      this.init();
  }

  init(){
    this.items = this.constant.items
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(NavigationDetailsPage, { item: item });
  }
}
