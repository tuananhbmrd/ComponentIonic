import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertService } from '../../providers/utilities/alert.service';
import { ToastService } from '../../providers/utilities/toast.service';
import { Camera } from '../../../node_modules/@ionic-native/camera';
import { ConstantProvider } from '../../providers/constant/constant';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public profilePicture: string;
  public profileRef: any;
  public errorMessage: any;

  public enableNotifications = true;
  public language: any;
  public currency: any;
  public paymentMethod: any;
  public languages;
  // languages = ['English', 'Portuguese', 'French'];
  public paymentMethods;
  public currencies;

  user = {
    name: 'anh beo',
    imageUrl: 'assets/imgs/bocon.jpg'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertService: AlertService,
    public toastCtrl: ToastService,
    public camera: Camera,
    public constant: ConstantProvider) {
    this.init();
  }

  init() {
    this.languages = this.constant.languages;
    this.paymentMethods = this.constant.paymentMethods;
    this.currencies = this.constant.currencies;

    // set input default
    this.language = this.languages[0];
    this.currency = this.currencies[0];
    this.paymentMethod = this.paymentMethods[0];
  }

  toggleNotifications() {
    if (this.enableNotifications) {
      this.toastCtrl.create('Notifications enabled.');
    } else {
      this.toastCtrl.create('Notifications disabled.');
    }
  }

  updateImage(value) {
    this.profilePicture = 'data:image/jpeg;base64,' + value.val();
  }

  updateProfileImage() {
    this.camera.getPicture({
      quality: 50,
      allowEdit: true,
      cameraDirection: this.camera.Direction.FRONT,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.user.imageUrl = imageData;
    }, (err) => {
      this.toastCtrl.create('Error: ' + err);
    });
  }

  logOut() {
    this.alertService.presentAlertWithCallback(this.constant.logout.tittleLogout,
      this.constant.logout.messageLogout).then((yes) => {
        if (yes) {
          this.toastCtrl.create(this.constant.logout.messageLogoutS);
        }
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
