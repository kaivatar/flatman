import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'page-home',
  templateUrl: 'detail.html'
})
export class DetailPage {
  public flat: FirebaseObjectObservable<any>;
  constructor(public navCtrl: NavController,public db: AngularFireDatabase,public navParams: NavParams) {
      this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.flat = this.navParams.get('flat');
  }


}