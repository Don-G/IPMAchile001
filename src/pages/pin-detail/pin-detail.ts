import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController, ViewController} from 'ionic-angular';
import { DbService } from '../../providers/db-service';
import { Device } from '@ionic-native/device';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'page-pin-detail',
  templateUrl: 'pin-detail.html'
})
export class PINDetailPage {
  public source: any;

  constructor(public platform: Platform, public alertCtrl: AlertController, public http: Http, public viewCtrl: ViewController,public dbService: DbService,private device: Device, storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.platform.ready().then((readySource) => {this.source = readySource});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PinDetail');
  }

  dismiss(email, telephone) {
    if(email!=null && email!="" && telephone!=null && telephone!=""){
      //define the message
      let headers = new Headers();
      headers.append('Content-Type','application/json');

      let requestMsg = {
        username : "Quizionic2",
        telephone : telephone,
        email : email,
        uuid : "0DF0B0CE-BBF6-4A9B-B14D-67485B5F3D18"
      };
      
      if(this.source !="dom"){
        requestMsg.uuid=this.device.uuid;
      }
      

      this.http.post('http://www.studiomob.ca/pin/requestPin.php', JSON.stringify(requestMsg), {headers: headers})
        .map(res => res.json())
        .subscribe(data =>{
        console.log(data);
        let alert = this.alertCtrl.create({
            title: 'PIN Requested',
            subTitle: 'A SMS with your PIN will be provided shorthly.',
            
        });
        alert.present();
      });

      //this.viewCtrl.dismiss();
    }
    
  }

}
