import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BarChartPage } from '../pages/bar-chart/bar-chart';
import { LineChartPage } from '../pages/line-chart/line-chart';
import { PieChartPage } from '../pages/pie-chart/pie-chart';
import {IonChartComponent} from '../components/ion-chart/ion-chart'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IonChartComponent,
    BarChartPage,
    LineChartPage,
    PieChartPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IonChartComponent,
    BarChartPage,
    LineChartPage,
    PieChartPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
