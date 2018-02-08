import { Component } from '@angular/core';
import { NavController, Events, NavParams, AlertController, Platform, MenuController} from 'ionic-angular';
import { FbProvider } from '../../providers/fb-provider';
import { WelcomePage} from '../welcome/welcome';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  private fb: any;
  public email: string;
  public name: string;
  public picture: any;
  private source: any;
  public storage: Storage;
  private title: string;
  private buttonText: string;
  private buttonTextSig: string;

  constructor(public events: Events, public nav: NavController, public alertCtrl: AlertController, public plt: Platform, public navParams: NavParams, public menu:MenuController, storage: Storage, fbProvider : FbProvider) {
        this.nav = nav;
        this.storage = storage;
        this.fb = fbProvider;
        this.email = '';
        this.name = '';
        this.plt.ready().then((readySource) => {
          this.source = readySource;
        });
      }

  login(caller) {
    if(caller == 'log') {
      if(this.source == 'cordova'){
        this.fb.login().then(() => {
          this.fb.getCurrentUserProfile().then(
              (profileData) => {
                this.events.publish('loggedIn',1);
                this.nav.setRoot(WelcomePage);
              }
          );
        },(error) => {
          let alert = this.alertCtrl.create({
            title: 'Ups...',
            subTitle: error,
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  let alertTransition = alert.dismiss();
                  alertTransition.then(()=>{
                    //this.nav.pop();
                  });
                }
            }]
        });
          alert.present();
        });
      } else {
        // Simulate facebook feedback when in browser execution
        this.storage.set('userName','Flavio');
        this.storage.set('email','fpassa@studiomob.ca');
        this.storage.set('picture','http://www.studiomob.ca/StudioMobCA.hyperesources/surface2.png');

        this.events.publish('loggedIn',1);
        this.nav.setRoot(WelcomePage);
      }
    } else {
      this.storage.set('userName',this.name);
      this.storage.set('email',this.email);
      this.storage.set('picture','http://www.studiomob.ca/StudioMobCA.hyperesources/surface2.png');
      this.events.publish('loggedIn',1);
      this.nav.setRoot(WelcomePage);
    }
     
  }

 ionViewDidLeave(){
   this.menu.enable(true);
 }

 ionViewDidLoad() {
    this.menu.enable(false);
    let param = this.navParams.get('logout');
    if (typeof param == "undefined"){
      this.title="Login";
      this.buttonText="Click here for Login";
      this.buttonTextSig="Click here for Sign-up";
      this.storage.get('userName').then(data=>{
        if (data != null) {
          this.events.publish('loggedIn',1);
          this.nav.setRoot(WelcomePage);
        }
      });
    } else {
      this.title="Logout";
      this.buttonText="";
      this.buttonTextSig="Click here for Logout";
    }
 }

 logOut(){
     this.fb.logout().then(() => {
      this.events.publish('loggedIn',0);
      this.nav.setRoot(WelcomePage);
    }); 
 }

 action(caller){
   // Based on page's title we determine if it's login/logout
   if(this.title == "Login") {
     this.login(caller);
   } else {
     this.logOut();
   }
 }
   
}
