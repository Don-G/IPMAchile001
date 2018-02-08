import {Injectable} from '@angular/core';
import {Events, Platform} from 'ionic-angular';
//import { SQLite } from '@ionic-native/sqlite';

const QDB_NAME: string = 'Q2data.db';
const PDB_NAME: string = 'Q2progress.db';
const win: any = window;

@Injectable()
export class DbService {
  local: any;
  source: string;
  private db: any;
  private dbp: any;

  constructor(
    public platform: Platform,
    public events: Events,
  ){
    this.platform.ready().then((readySource) => {this.source = readySource});
  }

  init(){
    if (win.sqlitePlugin) {
        this.db = win.sqlitePlugin.openDatabase({
            name: QDB_NAME,
            location: 'default',
            createFromLocation: 0
        });
        this.dbp = win.sqlitePlugin.openDatabase({
            name: PDB_NAME,
            location: 'default'
        });
    } else {
        console.warn('Storage: SQLite plugin not installed, falling back to WebSQL. Make sure to install cordova-sqlite-storage in production!');
        this.db = win.openDatabase(QDB_NAME, '1.0', 'database1', 5 * 1024 * 1024);
        this.dbp = win.openDatabase(PDB_NAME, '1.0', 'database2', 5 * 1024 * 1024);
    }
    this.createProgressTable();
  }

  query(dbase: any, querys: string, params: any[] = []): Promise<any> {
      return new Promise((resolve, reject) => {
          try {
                  dbase.transaction((tx: any) => {
                      tx.executeSql(querys, params,
                          (tx: any, res: any) => resolve({ tx: tx, res: res }),
                          (tx: any, err: any) => reject({ tx: tx, err: err }));
                  },
                  (err: any) => reject({ err: err }));
          } catch (err) {
              reject({ err: err });
          }
      });
  }


  get(key: string): Promise<any> {
      return this.query(this.db,'select key, value from kv where key = ? limit 1', [key]).then(data => {
          if (data.res.rows.length > 0) {
              //console.warn(data.res.rows.item(0).value);
              return data.res.rows.item(0).value;
          }
      });
  }

  set(key: string, value: string): Promise<any> {
      return this.query(this.db,'insert or replace into kv(key, value) values (?, ?)', [key, value]);
  }


  remove(key: string): Promise<any> {
      return this.query(this.db,'delete from kv where key = ?', [key]);
  }


  clear(): Promise<any> {
      return this.query(this.db,'delete from kv');
  }

  // for future use
  getAllProducts() {
    let PRODUCTS = [];
    return new Promise ((resolve,reject) => resolve(this.query(this.db,"SELECT * FROM Product").then((data) => {
        if(data.res.rows.length > 0) {
            for(var i = 0; i < data.res.rows.length; i++) {
                //console.log(data.res.rows.item(i));
                PRODUCTS.push(data.res.rows.item(i));
            }
            //console.log("PRODUCTS -> " + JSON.stringify(this.PRODUCTS));
            return PRODUCTS;
        }
    }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
    })));
  }

  //----------------------------------------------------------

  // Full/Free version supportive functions ------------------

  isFullVersion(){
    return new Promise ((resolve,reject) => resolve(this.get('PAID').then((data)=> {
        if(data != null && data == '1') {
          this.setFullVersion();
          return true;
        } else {
          this.setFreeVersion();
          return false;
        }
    })));
  }

  setFullVersion(){
      this.set('PAID', '1');
      this.events.publish('paid:full', 1);
      this.unlockAll();
  }

  setFreeVersion(){
      this.set('PAID', '0');
      this.events.publish('paid:free', 0);
      this.lockAll();
  }
  //----------------------------------------------------------

  // Lock and Unlock functions -------------------------------

  lockAll(){
    let qId,cId,eId;
    console.log('lock all for Free Version called');
    this.getProperty('qId').then(data => {qId=data});
    this.getProperty('cId').then(data => {cId=data});
    this.getProperty('eId').then(data => {eId=data;
      this.lockAllQuestions(qId).
        then(data => this.lockAllCategories(cId).
          then(data => this.lockAllExams(eId).
            then(data =>console.log('Lock completed for Free Version'))));
    });

  }

  lockAllQuestions(id){
    console.log('lockAllQuestions above question Id:'+id+' called');
    return new Promise ((resolve,reject) => resolve(this.query(this.db,'UPDATE Question SET Enabled=0 WHERE Id>'+id).then((data) => {
        console.log("Questions locked");
        return;
    }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
    })));
  }

  lockAllCategories(id){
    console.log('lockAllCategories above category Id:'+id+' called');
    return new Promise ((resolve,reject) => resolve(this.query(this.db,'UPDATE Category SET Enabled=0 WHERE CatId>'+id).then((data) => {
        console.log("Categories locked");
        return;
    }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
    })));
  }

  lockAllExams(id){
    console.log('lockAllExams above exam Id:'+id+' called');
    return new Promise ((resolve,reject) => resolve(this.query(this.db,'UPDATE ExamType SET Enabled=0 WHERE Id>'+id).then((data) => {
        console.log("Exams locked");
        return;
    }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
    })));
  }

  unlockAll(){
    console.log('unlockAll called');
    this.unlockAllQuestions().
      then(data => this.unlockAllCategories().
        then(data => this.unlockAllExams().
          then(data =>console.log('All Unlocked'))));
  }

  unlockAllQuestions(){
    console.log('unlockAllQuestions called');
    return new Promise ((resolve,reject) => resolve(this.query(this.db,'UPDATE Question SET Enabled=1').then(() => {
        console.log("All questions unlocked");
        return;
    }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
    })));
  }

  unlockAllCategories(){
    console.log('unlockAllCategories called');
    return new Promise ((resolve,reject) => resolve(this.query(this.db,'UPDATE Category SET Enabled=1').then((data) => {
        console.log("All Categories unlocked");
        return;
    }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
    })));
  }

  unlockAllExams(){
    console.log('unlockAllExams called');
    return new Promise ((resolve,reject) => resolve(this.query(this.db,'UPDATE ExamType SET Enabled=1').then((data) => {
        console.log("All Exams unlocked");
        return;
    }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
    })));
  }

  unlockQuestionByCatId(Id){
    console.log('unlockQuestionByCatId('+Id+') called');
    return new Promise ((resolve,reject) => resolve(this.query(this.db,'UPDATE Question SET Enabled=1 WHERE (SELECT Q.Id FROM ExamType A, Question Q WHERE A.CatId=Q.CatId AND A.Id='+Id+')').then((data) => {
        console.log("Questions for Exam: " + Id + "unlocked");
        return data;
    }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
    })));
  }

  _unlockExamById(Id){
    return new Promise ((resolve,reject) => resolve(this.query(this.db,"UPDATE ExamType SET Enabled=1 WHERE Id="+Id).then((data) => {
        return data;
    }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
    })));
  }

  unlockExamById(Id){
    console.log('unlockExamById('+Id+') called');
    let id = Id;
    this.unlockQuestionByCatId(id).then((data) => {
      console.log('questions unlocked: '+data);
      this._unlockExamById(id).then((res) => {
          console.log('Exam:'+id+' unlocked');
          return res;
        },(error) => {
          console.log("ERROR -> " + JSON.stringify(error.err));
        });
        return;
      },(error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
      });
  }

  //----------------------------------------------------------

  // From here supportive functions for exams-list.ts

  findAllEnabledExams() {
    let EXAMS = [];
    return new Promise ((resolve,reject) => resolve(this.query(this.db,"SELECT * FROM ExamType WHERE Enabled=1").then((data) => {
        if(data.res.rows.length > 0) {
            for(var i = 0; i < data.res.rows.length; i++) {
                //console.log(data.res.rows.item(i));
                EXAMS.push(data.res.rows.item(i));
            }
            //console.log("EXAMS -> " + JSON.stringify(EXAMS));
            return EXAMS;
        }
    }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
    })));
  }

  //----------------------------------------------------------

  // From here supportive functions for exams-detail.ts

  getQuestionById(Id) {
    let QUESTION = {};
    return new Promise ((resolve,reject) => resolve(this.query(this.db,"SELECT * FROM Question WHERE Id="+Id).then((data) => {
        if(data.res.rows.length > 0) {
            QUESTION = data.res.rows.item(0);
            console.log("QUESTION -> " + JSON.stringify(QUESTION));
            return QUESTION;
        }
    }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
    })));
  }

  getQuestionsIdByCatAndQty(Cat,Qty) {
    let QUESTIONS = [];
    if(this.source=='cordova'){
      return new Promise ((resolve,reject) => resolve(this.query(this.db,"SELECT * FROM Question WHERE Question.CatId=" + Cat + " AND Question.Enabled=1 AND Question.Status<2 ORDER BY RANDOM() LIMIT " + Qty).then((data) => {
          if(data.res.rows.length > 0) {
              for(let i=0;i<data.res.rows.length;i++){
                QUESTIONS[i] = data.res.rows.item(i).Id;
              }
              console.log("QUESTIONS IDs -> " + JSON.stringify(QUESTIONS));
              return QUESTIONS;
          }
      }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
      })));
    } else {
      let _tempQuestionsIDs=[];
      let randomNum;
      return new Promise ((resolve,reject) => resolve(this.query(this.db,"SELECT * FROM Question WHERE Question.CatId=" + Cat + " AND Question.Enabled=1 AND Question.Status<2").then((data) => {
          if(data.res.rows.length > 0) {
              for(let i=0;i<data.res.rows.length;i++){
                _tempQuestionsIDs[i] = data.res.rows.item(i).Id;
              }
              for(let i=0; i<Qty; i++) {
                randomNum = Math.floor(Math.random() * _tempQuestionsIDs.length);
                QUESTIONS[i] = _tempQuestionsIDs[randomNum];
              }
              console.log("QUESTIONS IDs -> " + JSON.stringify(QUESTIONS));
              return QUESTIONS;
          }
      }, (error) => {
          console.log("ERROR -> " + JSON.stringify(error.err));
      })));
    }
  }

  getQuestionsById(Qty, Id) {
    let randomNum, qId;
    let ArrayQ=[];
    for(let i=0; i<Qty; i++) {
      randomNum = Math.floor(Math.random() * Id.length);
      qId = Id[randomNum];
      this.getQuestionById(qId).then(res=>{
        ArrayQ.push(res);
      });
    }
    return ArrayQ;
  }

  updateExplaShownInQuestionId(Id){
      this.query(this.db,"UPDATE Question SET ExplanationShown='Y' WHERE Id="+Id).then((data) => {
        console.log('Question Id: '+Id+' was updated');
      });
  }

  //-------------------------------------------------------------

  // Get and Set Property functions used accross Quizionic2

  getProperty(property) {
    let value;
    return new Promise ((resolve,reject) => resolve(this.query(this.db,"SELECT * FROM Config WHERE property=?",[property]).then((data) => {
        value = data.res.rows.item(0).value;
        console.log("PROPERTY GET -> " + property + " = " + value);
        return value;
    }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
    }))).catch(console.log.bind(console));
  }

  setProperty(nameP,value) {
    return new Promise ((resolve,reject) => resolve(this.query(this.db,"UPDATE Config SET value='" + value + "' WHERE property='" + nameP + "'").then((data) => {
          console.log("PROPERTY SET -> " + nameP + " = " + value);
          return 0;
    }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
    })));
  }

  //-------------------------------------------------------------

  // Tracker supportive functions

  createProgressTable() {
    return new Promise ((resolve,reject) => resolve(this.query(this.dbp,"CREATE TABLE 'Progress' ('UserName' TEXT NOT NULL, 'ExamId' INTEGER NOT NULL, 'ExamTitle' TEXT NOT NULL, 'Date' INTEGER NOT NULL, 'Scored' INTEGER NOT NULL, 'Time' INTEGER NOT NULL)").then((data) => {
        console.log("PROGRESS table created");
    }, (error) => {
        //console.log("ERROR -> " + JSON.stringify(error.err));
    })));
  }

  loadProgress(user, lsr, examid) {
    let PROGRESS = [];
    let querys;
    if(examid) {
      querys = "SELECT datetime(Progress.Date,'unixepoch') as dt_time, Scored, ExamId, Time, CASE WHEN (Scored<80) THEN 'NO' ELSE 'YES' END AS Passed FROM Progress where UserName='"+user+"' and ExamId=" + examid + " ORDER BY Date DESC limit " + lsr;
    } else {
      querys="SELECT datetime(Progress.Date,'unixepoch') as dt_time, Scored, ExamId, Time, CASE WHEN (Scored<80) THEN 'NO' ELSE 'YES' END AS Passed FROM Progress where UserName='"+user+"' ORDER BY Date DESC limit " + lsr;
    }
    return new Promise ((resolve,reject) => resolve(this.query(this.dbp,querys).then((data) => {
        if(data.res.rows.length > 0) {
          for(let i=0;i<data.res.rows.length;i++){
            PROGRESS.push(data.res.rows.item(i));
          }
          console.log("PROGRESS -> " + JSON.stringify(PROGRESS));
          return PROGRESS;
        }
    }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
    })));
  }

  updateProgress(user, examid, examTitle, testScore, spentTime) {
    let querys = "INSERT INTO Progress VALUES('" + user + "'," + examid + ",'" + examTitle + "',(SELECT strftime('%s','now'))," + testScore + "," + spentTime + ");";
    return new Promise ((resolve,reject) => resolve(this.query(this.dbp,querys).then((data) => {
        console.log("INSERTED Score:" + testScore + " for User: " + user + " in Test: " + examid + " in " + spentTime + "s");
        querys=null;
    }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
    })));
  }

  getProgressByUserId(user) {
    let PROGRESS = [];
    let querys = "SELECT DISTINCT ExamId, ExamTitle FROM Progress WHERE UserName='" + user + "' ORDER BY ExamId";
    return new Promise ((resolve,reject) => resolve(this.query(this.dbp,querys).then((data) => {
        if(data.res.rows.length > 0) {
          for(let i=0;i<data.res.rows.length;i++){
            PROGRESS.push(data.res.rows.item(i));
          }
          //console.log("PROGRESS -> " + JSON.stringify(PROGRESS));
          return PROGRESS;
        }
    }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
    })));
  }


}
