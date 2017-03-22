import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PieChart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pie-chart',
  templateUrl: 'pie-chart.html'
})
export class PieChartPage {
public title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.title = "Pie Chart Title";
  }

}
