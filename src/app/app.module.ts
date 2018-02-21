import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { WelcomePage } from '../pages/welcome/welcome';
import { DeveloperPage } from '../pages/developer/developer';
import { ExamListPage } from '../pages/exam-list/exam-list';
import { ExamDetailsPage } from '../pages/exam-details/exam-details';
import { TrackerListPage } from '../pages/tracker-list/tracker-list';
import { StoreDetailPage } from '../pages/store-details/store-details';
import { LoginPage } from '../pages/login/login';
import { Pin } from '../pages/pin/pin';
import { PINDetailPage } from '../pages/pin-detail/pin-detail';
import { TrackerExamDetailPage } from '../pages/tracker-details/tracker-details';
import { StoreListPage } from '../pages/store-list/store-list';
import { DbService } from '../providers/db-service';
import { SQLite } from '@ionic-native/sqlite';
import { StoreService } from '../providers/store-service';
import { FbProvider } from '../providers/fb-provider';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { AdMob } from '@ionic-native/admob';
import { MasInfoPage } from '../pages/mas-info/mas-info';
import { ListReviewPage } from '../pages/list-review/list-review';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    DeveloperPage,
    ExamListPage,
    ExamDetailsPage,
    StoreDetailPage,
    TrackerExamDetailPage,
    TrackerListPage,
    StoreListPage,
    LoginPage,
    Pin,
    PINDetailPage,
    MasInfoPage,
    ListReviewPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    DeveloperPage,
    ExamDetailsPage,
    StoreDetailPage,
    TrackerExamDetailPage,
    ExamListPage,
    TrackerListPage,
    StoreListPage,
    LoginPage,
    Pin,
    PINDetailPage,
    MasInfoPage,
    ListReviewPage
  ],
  providers: [
    StatusBar, SplashScreen, GoogleAnalytics, Device, AdMob, SQLite, DbService, StoreService, 
    //Storage,
     FbProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
