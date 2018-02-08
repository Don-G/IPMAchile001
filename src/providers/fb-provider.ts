import {Platform} from 'ionic-angular';
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
declare var facebookConnectPlugin: any;

@Injectable()
export class FbProvider {
    private userId: string;
    public storage: Storage;

    constructor(public platform: Platform, storage: Storage) {
        this.platform = platform;
        this.storage = storage;
        this.userId = '';
    }

    login() {
        let p = new Promise((resolve, reject) => {
        if(this.platform.is('cordova')) {
            facebookConnectPlugin.login(['email'], (success) => {
                    console.log(JSON.stringify(success));
                    this.userId = success.authResponse.userID;
                    console.log("User logged with Facebook");
                    resolve(success);
                },(err) => {
                    console.log(JSON.stringify(err));
                    reject(err);
                });

            } else {
                console.log("Please run me on a device");
                reject('Please run me on a device');
            }
        });
        return p;
    }

    getCurrentUserProfile() {
        let p = new Promise((resolve, reject) => {
            //Get user's email and name
            facebookConnectPlugin.api('me?fields=email,name,picture', null, (profileData) => {
                this.storage.set('userName',profileData.name);
                this.storage.set('email',profileData.email);
                this.storage.set('id',profileData.id);
                this.storage.set('picture',profileData.picture.data.url);
                resolve(profileData);
            },(err) => {
                console.log(JSON.stringify(err));
                reject(err);
            });
        });
        return p;
    }
    
    logout(){
        // check if there was a previous session initiated
        let p = new Promise((resolve, reject) => {
          this.storage.get('id').then(value=>{
           if(value != null && typeof value != 'undefined'){
            facebookConnectPlugin.logout(res => {
                //user logged out so we will remove him from the Storage
                this.storage.remove('userName');
                this.storage.remove('email');
                this.storage.remove('picture');
                this.storage.remove('id');
                resolve(res);
            },error => {
                console.log(JSON.stringify(error));
                reject(error);
            });
           } else {
                this.storage.remove('userName');
                this.storage.remove('email');
                this.storage.remove('picture');
                this.storage.remove('id');
                resolve();
           } 
          });    
        });
        return p;
    }
    
}
