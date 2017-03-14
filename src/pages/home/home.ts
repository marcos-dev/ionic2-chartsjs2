import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonChartComponent } from '../../components/ion-chart/ion-chart';
import { BarChartPage } from '../bar-chart/bar-chart';
import { LineChartPage } from '../line-chart/line-chart';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

  }

  openPage(page) {
    if(page == 'bar')
       this.navCtrl.setRoot(BarChartPage);
    else if(page == 'line')
        this.navCtrl.setRoot(LineChartPage);
  }

}
