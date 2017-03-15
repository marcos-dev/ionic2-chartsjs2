import { Component, Input, Output, ViewChild  } from '@angular/core';
import { Chart } from 'chart.js';

/*
  Generated class for the IonChart component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'ion-chart',
  template: `
  <ion-card>
       <ion-card-header>
        {{headerTitle}}
       </ion-card-header>
       <ion-card-content>
         <canvas #baseCanvas></canvas>
       </ion-card-content>
     </ion-card>
 `,
})
export class IonChartComponent {
debugger
  @Input('headerTitle') textHeader;
  @Input('type') chartType;
  @ViewChild('baseCanvas') baseCanvas;

  baseChart: any;
  headerTitle :string;


  constructor() {

  }

  ngOnInit () {
    var self = this;
    self.baseChart = new Chart(this.baseCanvas.nativeElement, {

              type: self.chartType,
              data: {
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  datasets: [{
                      label: 'Accesses',
                      data: [20, 19, 3, 5, 2, 3, 8, 10, 6, 15, 16, 18],
                      backgroundColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)',
                          'rgba(236, 85, 90, 1)',
                          'rgba(90, 37, 64, 1)',
                          'rgba(85, 159, 15, 1)',
                          'rgba(77, 156, 62, 1)',
                          'rgba(145, 159, 85, 1)',
                          'rgba(176, 110, 68, 1)'
                      ],
                      borderColor: [
                          'rgba(255,99,132,1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)',
                          'rgba(236, 85, 90, 1)',
                          'rgba(90, 37, 64, 1)',
                          'rgba(85, 159, 15, 1)',
                          'rgba(77, 156, 62, 1)',
                          'rgba(145, 159, 85, 1)',
                          'rgba(176, 110, 68, 1)'
                      ],
                      borderWidth: 1
                  }]
              },
              options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero:true
                          }
                      }]
                  }
              }

          });

  }
  ngAfterViewInit(){
      this.headerTitle = this.textHeader;
  }

}
