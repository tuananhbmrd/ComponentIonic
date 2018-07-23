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

  public characters = [
    {
      name: 'Gollum',
      quote: 'Sneaky little hobbitses!',
      image: 'assets/imgs/thumbnail-puppy-1.jpg',
      items: [
        { title: 'Race', note: 'Hobbit' },
        { title: 'Culture', note: 'River Folk' },
        { title: 'Alter Ego', note: 'Smeagol' }
      ]
    },
    {
      name: 'Frodo',
      quote: 'Go back, Sam! I\'m going to Mordor alone!',
      image: 'assets/imgs/thumbnail-puppy-2.jpg',
      items: [
        { title: 'Race', note: 'Hobbit' },
        { title: 'Culture', note: 'Shire Folk' },
        { title: 'Weapon', note: 'Sting' }
      ]
    },
    {
      name: 'Samwise Gamgee',
      quote: 'What we need is a few good taters.',
      image: 'assets/imgs/thumbnail-puppy-3.jpg',
      items: [
        { title: 'Race', note: 'Hobbit' },
        { title: 'Culture', note: 'Shire Folk' },
        { title: 'Nickname', note: 'Sam' }
      ]
    }
  ];

  public items = [
    {
      'title': 'Angular',
      'icon': 'angular',
      'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
      'color': '#E63135'
    },
    {
      'title': 'CSS3',
      'icon': 'css3',
      'description': 'The latest version of cascading stylesheets - the styling language of the web!',
      'color': '#0CA9EA'
    },
    {
      'title': 'HTML5',
      'icon': 'html5',
      'description': 'The latest version of the web\'s markup language.',
      'color': '#F46529'
    },
    {
      'title': 'JavaScript',
      'icon': 'javascript',
      'description': 'One of the most popular programming languages on the Web!',
      'color': '#FFD439'
    },
    {
      'title': 'Sass',
      'icon': 'sass',
      'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
      'color': '#CE6296'
    },
    {
      'title': 'NodeJS',
      'icon': 'nodejs',
      'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
      'color': '#78BD43'
    },
    {
      'title': 'Python',
      'icon': 'python',
      'description': 'A clear and powerful object-oriented programming language!',
      'color': '#3575AC'
    },
    {
      'title': 'Markdown',
      'icon': 'markdown',
      'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
      'color': '#412159'
    },
    {
      'title': 'Tux',
      'icon': 'tux',
      'description': 'The official mascot of the Linux kernel!',
      'color': '#000'
    },
  ]
}
