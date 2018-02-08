import {Component} from '@angular/core';
import {NavController, Events, NavParams} from 'ionic-angular';
import { LoginPage } from '../login/login';
import {DbService} from '../../providers/db-service';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'welcome',
  templateUrl: 'welcome.html'
})

export class WelcomePage {
  private source: any;

  constructor(public events: Events, public nav: NavController, public navParams: NavParams, public storage: Storage, public dbService: DbService) {
    this.source = navParams.get('source');
    if(this.source == 'cordova') {
      // just in case something has to be trigger on device at this point
    }
  }

  ionViewDidEnter(){
    // if login feature is activated then LoginPage
    this.dbService.getProperty('login').then(data => {
      if(data == 'true'){
        this.storage.get('userName').then(data => {   
          if (typeof data == "undefined" || data == null){
            this.nav.push(LoginPage);
          } else {
            this.events.publish('loggedIn',1);
            
          }
        });
      }
    });
  }
}
