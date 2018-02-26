import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExamListPage } from '../exam-list/exam-list';
import { ExamListCatPage } from '../exam-list-cat/exam-list-cat';

/**
 * Generated class for the ExamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exams',
  templateUrl: 'exams.html',
})
export class ExamsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamsPage');
  }

  goToExamListPage(){
    this.navCtrl.push(ExamListPage);
  }

  goToExamListCatPage(){
    this.navCtrl.push(ExamListCatPage);
  }

}
