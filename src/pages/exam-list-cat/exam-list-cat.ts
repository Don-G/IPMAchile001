import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ExamDetailsPage} from '../exam-details/exam-details';
import {DbService} from '../../providers/db-service';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the ExamListCatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exam-list-cat',
  templateUrl: 'exam-list-cat.html',
})
export class ExamListCatPage {
  exams: {};
  source: any;
  private user: any;

  private adId: any;

    constructor(private nav: NavController, public navParams: NavParams, public dbService: DbService) {
        this.nav = nav;

        //this.dbService = DbService;
        this.source = navParams.get('readySource');
        this.user = navParams.get('user');
        this.adId = navParams.get('adId');

        //console.log(source);
    }

    ionViewWillEnter(){
        this.dbService.findAllEnabledExamsNested().then(data => {
          this.exams = data
        });
    }

    itemTapped(event, exam) {
        this.nav.push(ExamDetailsPage, {
            exam: exam,
            source: this.source,
            user: this.user,
            adId: this.adId,
        });
    }
}
