import { Component } from '@angular/core';
import { IonicPage, NavParams, Platform, ViewController } from 'ionic-angular';
import { ConstantProvider } from '../../providers/constant/constant';

/**
 * Generated class for the ModalContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-content',
  templateUrl: 'modal-content.html',
})
export class ModalContentPage {

  
  public character;
  public characters;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public constant: ConstantProvider
  ) {
    this.characters = this.constant.characters;
    this.character = this.characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
