import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {ExamDetailsPage} from '../exam-details/exam-details';
import { DetailReviewPage } from '../detail-review/detail-review';

/**
 * Generated class for the ListReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-review',
  templateUrl: 'list-review.html',
})


export class ListReviewPage {

  private answersResume: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.answersResume = navParams.data;
    

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListReviewPage');
    console.log(this.answersResume);
  }

  goToDetailReviewPage(answer){
    this.navCtrl.push(DetailReviewPage, answer);
  }




}
