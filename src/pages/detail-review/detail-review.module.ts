import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailReviewPage } from './detail-review';

@NgModule({
  declarations: [
    DetailReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailReviewPage),
  ],
})
export class DetailReviewPageModule {}
