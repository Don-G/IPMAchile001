import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamListCatPage } from './exam-list-cat';

@NgModule({
  declarations: [
    ExamListCatPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamListCatPage),
  ],
})
export class ExamListCatPageModule {}
