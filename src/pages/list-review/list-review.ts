import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {ExamDetailsPage} from '../exam-details/exam-details';

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

//var resume = ExamDetailsPage.prototype.getResume();

export class ListReviewPage {

  private answersResume: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //this.answersResume = ExamDetailsPage.prototype.getResume();
    //this.answersResume = ExamDetailsPage.prototype.getResume();
    // this.answersResume = this.examDetailsPage.getResume();
    // this.answersResume = resume;
    // this.datosTienda = navParams.data;
    // this.answersResume = ExamDetailsPage.prototype.answersReview;
    // this.parameter1 = navParams.get('param1'); 
    this.answersResume = navParams.data;
    

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListReviewPage');
    console.log(this.answersResume);
  }




}
