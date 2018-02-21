import {enableProdMode} from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Nav, Events } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { StoreService } from '../providers/store-service';
import { DbService } from '../providers/db-service';
import {WelcomePage} from '../pages/welcome/welcome';
import {ExamListPage} from '../pages/exam-list/exam-list';
import {DeveloperPage} from '../pages/developer/developer';
import { Pin } from '../pages/pin/pin';
import {TrackerListPage} from '../pages/tracker-list/tracker-list';
import {StoreListPage} from '../pages/store-list/store-list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { AdMob } from '@ionic-native/admob';
import { MasInfoPage } from '../pages/mas-info/mas-info';
import { ListReviewPage } from '../pages/list-review/list-review';


enableProdMode();

declare var window: any;

@Component({
  selector: 'app',
  templateUrl: 'app.html',
  providers: [DbService, StoreService]
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = WelcomePage;
  pages: Array<{title: string, component: any, icon: string, paid: number}>;
  private readySource: any;
  dbService: any;
  storeService: any;
  private admobid: any;
  private ad: any;
  public _Paid: any;
  public storage: Storage;
  source: any;
  private user: any = '';
  private picture: any;
  private email: any = '';

  constructor (
    public platform: Platform,
    public events: Events,
    dbService: DbService,
    storage: Storage,
    storeService: StoreService,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private analytics: GoogleAnalytics,
    private admob: AdMob

  ) {
      //set app's pages. paid = 0, option always present in menu, paid = 1, only displayed in full version
      this.pages = [
          {title: 'Bienvenido', component: WelcomePage, icon: 'bookmark', paid: 0},
          {title: 'Exámenes', component: ExamListPage, icon: 'cube', paid: 0},
          {title: 'Resultados', component: TrackerListPage, icon: "arrow-graph-up-right", paid: 1},
          {title: 'Más Info', component: MasInfoPage, icon: "arrow-graph-up-right", paid: 0},
          // {title: 'Tienda', component: StoreListPage, icon: "card", paid: 0},
          // {title: 'PIN', component: Pin, icon: "card", paid: 0}
          // add your custom page here
      ];
      this.storage = storage;
      this.dbService = dbService;
      this.storeService = storeService;

      this.statusBar.styleDefault();
      this.initializeApp();
      //this.loadProfile(1);
    }


  initializeApp() {
     this.platform.ready().then((readySource) => {
     // Okay, so the platform is ready and our plugins are available.
     // Here you can do any higher level native things you might need.
     console.log('Platform ready from', readySource);
     this.readySource = readySource;

     if (readySource == 'cordova') {
          this.statusBar.styleDefault();

          if (this.platform.is('ios')){
            // Copy data.db from Application folder into Document Database folder
            window.plugins.sqlDB.copy("Q2data.db",0, success => {
              // Initialize database service (DbService)
              this.dbService.init();
            },error =>{
              console.log("Error Code = "+JSON.stringify(error));
            });
          } else {
            // Copy data.db - Android destination
            window.plugins.sqlDB.copy("Q2data.db",0, success => {
              // Initialize database service (DbService)
              this.dbService.init();
            },error =>{
              console.log("Error Code = "+JSON.stringify(error));
            });
          }

          // Google AdMob setup
          this.admobid = {};
          if( /(android)/i.test(navigator.userAgent) ) {
               this.admobid = { // for Android
                   banner: 'ca-app-pub-3709095601931870/3837206546', // change this value with your Android AdMob Banner ID
                   interstitial: 'ca-app-pub-3709095601931870/8267406146' // change this value with your Android AdMob Interstitial ID
               };
           } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
               this.admobid = { // for iOS
                  banner: 'ca-app-pub-3709095601931870/7754515340', // change this value with your iOS AdMob Banner ID
                  interstitial: 'ca-app-pub-3709095601931870/9231248541' // change this value with your iOS AdMob Interstitial ID
               };
           }

           // Init AdMob
           if (!this.admob ) {
             alert( 'admob plugin not ready' );
             return;
           } else {

             // customize banner appearance
             this.admob.createBanner({
                 adId: this.admobid.banner,
                 isTesting: false,
                 overlap: false,
                 autoShow: false,
                 position: this.admob.AD_POSITION.BOTTOM_CENTER
             });

             // customize interstitial
             this.admob.prepareInterstitial({
                 adId: this.admobid.interstitial,
                 autoShow: false
             });
             this.ad = this.admobid.interstitial;
          }

          // Initialize Google Analytics plugin
          if (this.analytics) {
            // Change these values with yours IDs
            var tracking_ID = this.platform.is('ios') ? "UA-63761768-4" : "UA-63761768-5" ;
            //window.analytics.debugMode();
            this.analytics.startTrackerWithId(tracking_ID);
            this.analytics.setUserId('Quizionic2');
            this.analytics.trackView('Quizionic2 Home');
            console.log("GA activated");
          }

          // Initialize database service (DbService)
          this.dbService.init();

          // Initialize storeService (IAP)
          this.storeService.init();

        } else { //No Cordova platform
          this.ad = 0;
          // Initialize database service (DbService)
          this.dbService.init();
          this.storeService.init();
        }


        // this.dbService.isFullVersion().then(data => this._Paid = data);

        // To force Full Version as default uncomment the 3 lines below
        this.dbService.setProperty('fullversion','true');
        this.dbService.setFullVersion();
        this.dbService.setProperty('admob','false');
        this.splashScreen.hide();

        this.dbService.getProperty('login').then(data => {
          if(data == 'true'){this.loadProfile(1)}
        });
      });

      this.events.subscribe('paid:full',() =>this._Paid=1);
      this.events.subscribe('paid:free',() =>this._Paid=0);
      this.events.subscribe('loggedIn',(val) =>this.loadProfile(val));

    }

    loadProfile(val){
      if(val == 1){
        this.storage.get('userName').then(name=>this.user=name);
        this.storage.get('email').then(email=>this.email=email);
        this.storage.get('picture').then(picture=>this.picture=picture);
        if(this.pages[this.pages.length-1].title != 'Cerrar Sesión'){
          this.pages.push({title: 'Cerrar Sesión', component: LoginPage, icon: "key", paid: 0});
        }
      } else {
        this.user = '';
        this.pages.pop();
      }

    }

    openDeveloperPage(){
       this.nav.push(DeveloperPage);
     }

    openPage(page) {
      let user = "StudioMob";

      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      if (page.component == WelcomePage) {
           this.nav.setRoot(WelcomePage);
         } else {

           if (page.component == LoginPage) {
            this.nav.push(LoginPage,{
              logout: true
            });
           } else {
              this.nav.push(page.component, {
                readySource: this.readySource,
                user: user,
                adId: this.ad
              });
            }
         }

    }

}
