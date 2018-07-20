import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConstantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConstantProvider {

  constructor(public http: Http) {
    console.log('Hello ConstantProvider Provider');
  }

  public languages = ['English', 'Portuguese', 'French'];
  public paymentMethods = ['Paypal', 'Credit Card'];
  public currencies = ['USD', 'BRL', 'EUR'];

  public logout = {
    tittleLogout: "Are you sure?",
    messageLogout: "This will log you out of this application.",
    messageLogoutS: 'Logged out of the application'
  }
}
