import { Component } from '@angular/core';
import { NavController, App} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { SettingsPage } from './settings/settings';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {
  public user : any;

  constructor(public navCtrl: NavController, public appCtrl: App, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }

  goSettingsPage() {
    this.appCtrl.getRootNav().push(SettingsPage);
  }


}
