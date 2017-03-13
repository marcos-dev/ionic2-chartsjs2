import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BarChartPage } from '../pages/bar-chart/bar-chart';
import {IonChartComponent} from '../components/ion-chart/ion-chart'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IonChartComponent,
    BarChartPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IonChartComponent,
    BarChartPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}