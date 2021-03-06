import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ExamDetailsPage} from '../exam-details/exam-details';
import {DbService} from '../../providers/db-service';
import {Storage} from '@ionic/storage';


@Component({
    selector: 'exam-list',
    templateUrl: 'exam-list.html'
})

export class ExamListPage {
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
        this.dbService.findAllEnabledExams().then(data => {
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
