import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-review',
  templateUrl: 'detail-review.html',
})
export class DetailReviewPage {

  private answer: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.answer = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailReviewPage');
  }

}
