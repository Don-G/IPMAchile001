import {Component} from '@angular/core';
import {NavController, Events, NavParams} from 'ionic-angular';
import {DbService} from '../../providers/db-service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'developer',
  templateUrl: 'developer.html'
})

export class DeveloperPage {

  public _hlra: any;
  public _expla: any;
  public _admob: any;
  public _fullv: any;
  private _quantity: any;
  private _login: any;
  private _qId : any;
  private _cId : any;
  private _eId : any;

  constructor(public nav: NavController, public events: Events, public navParams: NavParams, public storage: Storage, public dbService: DbService) {
    this.dbService.getProperty('highlight').then(data => this._hlra = data);
    this.dbService.getProperty('admob').then(data => this._admob = data);
    this.dbService.getProperty('login').then(data => this._login = data);
    this.dbService.getProperty('fullversion').then(data => this._fullv = data);
    this.dbService.getProperty('explanation').then(data => this._expla = data);
    this.dbService.getProperty('explanationq').then(data => this._quantity = data);
    this.dbService.getProperty('qId').then(data => this._qId = data);
    this.dbService.getProperty('cId').then(data => this._cId = data);
    this.dbService.getProperty('eId').then(data => this._eId = data);
  }

  logEvent(e,pname) {
     console.log(e,pname);
    if (pname=='fullversion'){
      if (e.checked){
        this.dbService.setFullVersion();
      } else {
        this.dbService.setFreeVersion();
      }
    }

    if (e.checked){
      this.dbService.setProperty(pname,'true');
    } else {
      this.dbService.setProperty(pname,'false');
    }
   }

   update(value, key){

     if(value!=''){
       this.dbService.setProperty(key,value);
     }
   }

}
