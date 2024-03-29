import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the LineChart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-line-chart',
  templateUrl: 'line-chart.html'
})
export class LineChartPage {

public title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.title = "Line Chart Title";
  }

}
