import {Component, ViewChild, Injectable} from '@angular/core';
import { Content, List } from 'ionic-angular';
import {NavController, NavParams, AlertController, ActionSheetController} from 'ionic-angular';
import {DbService} from '../../providers/db-service';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { AdMob } from '@ionic-native/admob';
import {Storage} from '@ionic/storage';


import { ListReviewPage } from '../list-review/list-review';

let _highlight: boolean;
let _qID;
let _score;
let _timeOver;
let _lastQuestion;
let _timed;
let _click;
let _admob: boolean;
let _Paid;
let _exam;
let _examOver;
let _nextView;
let _explanation: boolean;
let _expQuantity;
let _explaAvailabilty;
let _npbutton: boolean;
let _answer: Array<any>; // [orderID, question, selectedAnswer, correctAnswer, argumentAnswer] para cada respuesta
let _orderID: number; // orden en que se despliegan las preguntas


@Component({
    selector: 'exam-details',
    templateUrl: 'exam-details.html',
    //directives: [NgClass]
})


export class ExamDetailsPage {
  private _nextID: any;
  private questionArrayID:{};
  private scoreArrayID: Array<number>;
  private orderId: number;
  public answersReview: Array<any>; // Lista que contiene "_answer"
  public question: any;
  private ExplaAvailable: Boolean;
  private indexQ: any;
  private source: any;
  public timed: Boolean;
  private time: string;
  private diff: number;
  private spentTime: number;
  private minutes: any;
  private seconds: any;
  private multiAnswer: Boolean;
  private timerTimeout: any;
  private testTime: any;
  private duration: any;
  public title: string;
  private qty: number;
  private score: number;
  private user: any;
  private examid: any;
  private recordProgress: any;
  private isNormal: any;
  private isOut: any;
  private adId: any;
  private expQty: any;
  private nextExam: any;
  private minScore: any;
  private npb: any;
  @ViewChild(Content) content: Content;


    constructor(private analytics: GoogleAnalytics, private admob: AdMob, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, public nav: NavController, public navParams: NavParams, public storage: Storage, public dbService: DbService, public navCtrl: NavController) {
      _orderID = 0;
      _click = false;
      _examOver = false;
      _timeOver = false;
      _nextView='back';
      _score = 1;
      this.nav = nav;
      this.score = 0;
      this.isNormal = true;
      this.isOut = false;
      _exam = navParams.get('exam');
      this.source = navParams.get('source');
      //this.user = navParams.get('user'); deactivated as per Login feature
      this.adId = navParams.get('adId');
      this.examid = _exam.Id;
      this.duration = _exam.Duration;
      this.title = _exam.ExamTitle;
      this.qty = _exam.Qty;
      this.scoreArrayID = new Array(this.qty);
      this.answersReview = new Array(); // Inicializa array vacio
      this.recordProgress = _exam.Progress;
      this.nextExam = _exam.NextExam;
      this.minScore = _exam.MinScore;
      if(this.duration >0) {
        _timed=true;
      } else {
        _timed=false;
      }
      this.timed=_timed;
      this._nextID=0;

      this.dbService.getProperty('explanationq').then(data => {
        _expQuantity = data;
        this.expQty = _expQuantity;
      });

      this.dbService.getQuestionsIdByCatAndQty(_exam.CatId,_exam.Qty).then(data => this.questionArrayID = data);

    }

    // this is the main timer function to update time left in GUI
    onTimerTimeout(){
      //let timerTest = document.getElementById('myTimer');
      this.diff = this.duration--;
      this.spentTime = this.testTime-this.diff;
      if (this.diff === 0) {
        _timeOver = true;
      }
      // format timer value
      this.minutes = (this.diff / 60) | 0;
      this.seconds = (this.diff % 60) | 0;
      this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
      this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
      this.time = this.minutes + ":" + this.seconds;

      if (this.diff <= 10) {
        //used to change CSS property (color green to red when time <10s)
        this.isOut = true;
        this.isNormal = false;
      }

      // if there is time left, then we call it again
      if (!_timeOver) {
        this.timerTimeout = setTimeout(()=> {
          this.onTimerTimeout();
        },1000);
        // otherwise, we cancel the timer and pop-up the alert
      } else {
        clearTimeout(this.timerTimeout);
        this.alert("timeOut");
      }
    }

    showQuestion(questionId){
      this.multiAnswer = false;

      // initialize timer count if we have a timed exam
      // if timer is not in use yet, then we create it
      if(this.timed && typeof this.timerTimeout === 'undefined') {
        this.testTime = this.duration;
        this.timerTimeout = setTimeout(() => {this.onTimerTimeout()},1000);
      }
      this.scoreArrayID[this._nextID] = 0;

      // get question to show
      this.dbService.getQuestionById(questionId).then(data => {
        this.question = data;
        if(this.question.Answer.length > 1) {
          this.multiAnswer = true;
          let temp = this.question.Answer.replace(/,/g,"");
          this.question.Answer = temp;
          //console.log(this.question.Answer);
        };
        this.question._f = {'A':0,'B':0,'C':0,'D':0,'E':0};
        // check if there is explanation text in this question
        // and if overal explanation flag is enabled
        if (this.question.Explanation !== '' && _explanation){
          this.ExplaAvailable = true;
          // then check if explanation has been shown before,
          if (this.question.ExplanationShown) {
            _explaAvailabilty = true;
          } else {
            _explaAvailabilty = false;
          }
        } else {
          this.ExplaAvailable = false;
        }
      });
      this.content.resize();
      this.content.scrollToTop();
    }

    alert(condition){
      // calculate Score
      for(var i=0;i<this.qty;i++){
        this.score = this.score + this.scoreArrayID[i];
        console.log(i, this.scoreArrayID[i]);
      }
      let testScore=Math.floor((this.score/this.qty)*100);
      console.log('testScore '+testScore+' minScore: '+this.minScore);
      if(testScore >= this.minScore) {
        console.log('MinScore reached!');
        if(this.nextExam){
          //unlock linked exam
          this.dbService.unlockExamById(this.nextExam);
        }
      }

      //is full version and recordProgress enabled for this exam?
      if (_Paid && this.recordProgress == "Y"){
        if(!this.spentTime){
          this.spentTime=0;
        }
        //updating progress table
        this.dbService.updateProgress(this.user, this.examid, this.title, testScore, this.spentTime);
      }

      //let's configure the alert based on condition
      let tit: string;
      let subTit: string;

      switch (condition) {
        case "timeOut":
              tit='Tiempo Terminado';
              subTit='Tu puntaje fué: ' + testScore + '%';
              // this.getReview();
              break;
        case "lastQuestion":
              tit='Exámen completado';
              subTit='Tu Puntaje: ' + testScore + '%';
              // Llamar a List View
              // this.getReview();
              break;

      }

      //cancel the timer if is it not yet cancelled.
      if (typeof this.timerTimeout !== 'undefined'){
        clearTimeout(this.timerTimeout);
      }

      let alert = this.alertCtrl.create({
          title: tit,
          subTitle: subTit,
          buttons: [
            {
              text: 'OK',
              handler: () => {
                _examOver = true;
                let alertTransition = alert.dismiss();
                alertTransition.then(()=>{
                  this.nav.pop();
                //   this.navCtrl.push(SecondPage, {
                //     param1: 'John', param2: 'Johnson'
                // });
                  console.log(this.answersReview);
                  this.navCtrl.push(ListReviewPage, this.answersReview);
                  // this.nav.push(ListReviewPage);
                  // this.nav.push(ListReviewPage) // ver resumen de buenas y malas obligado
                });
                return false;
              }
          },
      ]
      });
      alert.present();
    }

   

    // Guarda todas las respuestas
    // Implementado solo para "one answer", trabajo futuro "multiAnswer"
    getAnswer(question, correctAnswer, selectedAnswer, argumentAnswer, textCorrectAnswer, textSelectedAnswer){
      console.log('Dentro de getAnswer()');
      _orderID ++;
      console.log('_orderID: '+_orderID);
      let color: string;
      if (correctAnswer == selectedAnswer){
        color = 'correct';
      }else{
        color = 'wrong';
      }

      if (argumentAnswer == 'NULL'){
        argumentAnswer = 'Esta respuesta no posee argumento por ahora';
      }

      _answer = [_orderID, question, correctAnswer, selectedAnswer, argumentAnswer, color, textCorrectAnswer, textSelectedAnswer]
      this.answersReview.push(_answer);
      console.log('Respuesta guardada')
      console.log(this.answersReview);
    }

    getResume(){
      // this.datosTienda = this.navParams.get('datosTienda');
      this.answersReview = this.navParams.get('answersReview');
      // return this.answersReview;
    }

    getNextQuestionId(){
      if (!_timeOver && !_examOver){
        if (this.indexQ <= this.qty) {
          this._nextID = this.indexQ - 1;
          _qID = this.questionArrayID[this._nextID];
          return _qID;
        } else {
          _lastQuestion = true;
          this.alert("lastQuestion");
          if (_admob && !_Paid){
            // customize interstitial
            this.admob.prepareInterstitial({
                adId: this.adId,
                autoShow: true
            });
          }
        }
      } else {
        _timeOver = true;
        this.alert("timeOut");
        if (_admob && !_Paid){
          // customize interstitial
          this.admob.prepareInterstitial({
              adId: this.adId,
              autoShow: true
          });
        }
      }
    }

    clickedRow(rowId){
      console.log('Pregunta: '+ this.question.Question); // question
      console.log('Correcta: '+ this.question.Answer); // question.Answer = correcta
      console.log('Seleccionada: '+ rowId); // rowId = seleccionada
      console.log('Razón: '+ this.question.Explanation);

      let text_correctAnswer: any;
      let text_selectedAnswer: any;


      // Casos para Respuesta Correcta
      switch (this.question.Answer){

        case 'A':
          text_correctAnswer = this.question.A;
          break;
        
        case 'B':
          text_correctAnswer = this.question.B;
          break;

        case 'C':
          text_correctAnswer = this.question.C;
          break;

        case 'D':
          text_correctAnswer = this.question.D;
          break;
      }

      // Casos para la Respuesta Seleccionada
      switch (rowId){
        case 'A':
          text_selectedAnswer = this.question.A;
          break;

        case 'B':
          text_selectedAnswer = this.question.B;
          break;

        case 'C':
          text_selectedAnswer = this.question.C;
          break;

        case 'D':
          text_selectedAnswer = this.question.D;
          break;
      }

      // Crear una lista con las correctas y las malas para ser desplegadas al final
      this.getAnswer(this.question.Question, this.question.Answer,  rowId, this.question.Explanation, text_correctAnswer, text_selectedAnswer);

      // check for multiAnswer
      if(this.multiAnswer){
        if(this.question._f[rowId]==0){
          this.question._f[rowId] = 2;
        } else {
          this.question._f[rowId] = 0;
        }
      } // only one answer
      else if(!_click && !_examOver){
        //we avoid rebounce of touch/tap events
        _click = true;
        if(this.question.Answer === rowId) { //Guarda solo las correctas
          this.question._f[rowId] = 1;
          this.scoreArrayID[this.indexQ-1]= _score; // lista de respuestas
        } else {
          this.question._f[rowId] = -1;
          this.scoreArrayID[this.indexQ-1]= 0;
          console.log('_highlight ' + _highlight);
          if(_highlight) {
            this.question._f[this.question.Answer] = 1;
          }
        }

        this.continueExam();
      }
    }

    validateAnswer(){
      let answerTemp="";
      for(var rowId = "A".charCodeAt(0); rowId < "F".charCodeAt(0); rowId++) {
          if (this.question._f[String.fromCharCode(rowId)]==2){
            answerTemp=answerTemp+String.fromCharCode(rowId);
          }
      }

      let highlightAnswer=this.question.Answer.split("");
      console.log(highlightAnswer);
      let userHighlight=answerTemp.split("");
      console.log(userHighlight);

      if(this.question.Answer === answerTemp){
        console.log('RESPUESTA CORRECTA');
        this.scoreArrayID[this.indexQ-1]= _score;
      } else {
        console.log('RESPUESTA INCORRECTA');
        // Highlight wrong answers
        this.scoreArrayID[this.indexQ-1]= 0;
        if(_highlight) {
          for(var i=0; i<userHighlight.length; i++){
            if(userHighlight[i] != highlightAnswer[i]) {
              this.question._f[userHighlight[i]]=-1;
            }
          }
        }
      }

      // Highlight correct answers
      if(_highlight) {
        for(var j=0; j<highlightAnswer.length; j++){
            this.question._f[highlightAnswer[j]]=1;
        }
      }
      this.continueExam();
    }

    continueExam(){
      if (this.indexQ === this.qty) {
          _examOver = true;
          _lastQuestion = true;
          this.alert("lastQuestion");
          if (_admob && !_Paid){
            // customize interstitial
            this.admob.prepareInterstitial({
                adId: this.adId,
                autoShow: true
            });
          }

      } else {
        setTimeout(()=>{
            _click=false;
            this.nextQuestion();
        },1000);
      }
    }

    explanation(qId) {
      // handle the explanation button functionality
      // if the exam is not over
      let actionSheet;
      if(!_timeOver && !_examOver){
        // if we have explanations left and if question has an explanation,
        // then we configure the actionsheet to show the explanation text
        if(_expQuantity > 0 || _explaAvailabilty){
           actionSheet = this.actionSheetCtrl.create({
              buttons: [
                  {text: this.question.Explanation,
                   handler: () => {
                        let navTransition = actionSheet.dismiss();
                        navTransition.then(()=>{
                            //
                        });
                        console.log('Explanation viewed');
                        return false;
                   }
                  }
              ]
          });

          // we update question record to indicate that explanation was displayed
          this.dbService.updateExplaShownInQuestionId(qId);
          // we decrease the available quantity only if explanation was not displayed before
          // i.e. only the first time that explanation is displayed, we decrease
          // 1 from available explanations (qty)

          if (!_explaAvailabilty){
            // we decrease quantity in memory and in database
            _expQuantity --;
            this.expQty--;
            _explaAvailabilty = true;
            this.dbService.setProperty('explanationq', _expQuantity);
            // logging for debugging purpose
            console.log('Available Explanations: '+_expQuantity);
          }

        } else {
          actionSheet = this.actionSheetCtrl.create({
             buttons: [
                 {text: 'Ups... You don\'t have any explanation available. Buy them from Store Main Menu option',
                  handler: () => {
                    let navTransition = actionSheet.dismiss();
                    navTransition.then(()=>{

                    })
                    console.log('No explanations available');

                    return false;
                  }
                 }
             ]
          });
        }
        actionSheet.present();
      }
    }

    ionViewWillEnter(){
      this.indexQ=1;
      this._nextID=0;
      for(var j=0;j<this.qty;j++){
        this.scoreArrayID[j]= 0;
      }

      this.dbService.getProperty('highlight').then(data => _highlight = data == "true" ? true : false);
      this.dbService.getProperty('explanation').then(data => _explanation = data == "true" ? true : false);
      
      this.npb = false;
      this.dbService.getProperty('admob')
      .then(data => { _admob=data == "true" ? true : false;
        if(_admob && !_Paid){
          if(this.source == 'cordova') {
            // present Admob banner
            this.admob.showBanner(this.admob.AD_POSITION.BOTTOM_CENTER);
          }
        } else {
          if(this.source == 'cordova') {
            this.admob.removeBanner();
          }
        }
        if(this.source == 'cordova') {
          this.analytics.trackView('Exam-Detail Page for ' + this.title);
        }
      });
      this.dbService.isFullVersion().then(data => _Paid = data);

      // this is executed when entering in the component (i.e. this view)
      // when in device, source='cordova' if not, source='dom' (aka browser)
      // we wait 750ms to allow database to response to property queries.

      // if login feature is activated then user is set with user's name
      this.dbService.getProperty('login').then(data => {
        if(data == 'true'){
          this.storage.get('userName').then(data => {
            if (typeof data == "undefined" || data == null){
              this.user = "StudioMob";
            } else {
              this.user = data;
            }
          });
        } else {
          this.user = "StudioMob";
        }
      });

      setTimeout(()=>{
          this.showQuestion(this.getNextQuestionId());
      }, 750);
    }

    previousQuestion() {
      if (this.indexQ > 1) {
         this.indexQ--;
      }
      //removing score if user goes back
      this.scoreArrayID[this.indexQ-1]=0;
      this.showQuestion(this.getNextQuestionId());
    }

    nextQuestion() {
      if (this.indexQ < this.qty) {
         this.indexQ++;
      }
      this.showQuestion(this.getNextQuestionId());
    }

    // when exiting the view, we cancel the timer and clear tracking variables
    ionViewWillLeave(){

      if(this.source == 'cordova') {
        if (_admob) this.admob.hideBanner();
      }
      clearTimeout(this.timerTimeout);
      _timeOver = false;
      _examOver = false;
      _timed = false;

      this.questionArrayID=null;
      this._nextID=null;
      this.qty=null;
      this.indexQ=null;
      this.question=null;
    }
}
