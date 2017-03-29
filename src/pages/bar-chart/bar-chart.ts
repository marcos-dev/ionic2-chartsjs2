import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonChartComponent } from '../../components/ion-chart/ion-chart';
/*
  Generated class for the BarChart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bar-chart',
  templateUrl: 'bar-chart.html'
})
export class BarChartPage {
public title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.title = "Bar Chart Title";
  }
}
