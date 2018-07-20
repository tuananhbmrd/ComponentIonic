import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DateTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-date-time',
  templateUrl: 'date-time.html',
})
export class DateTimePage {

  public event = {
    month: '1996-01-06',
    timeStarts: '07:43',
    timeEnds: '1996-01-06'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DateTimePage');
  }

}
