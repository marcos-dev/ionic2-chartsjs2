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
if(self.chartType == 'bar'){
    self.baseChart = new Chart(this.baseCanvas.nativeElement, {

              type: self.chartType,
              data: {
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  datasets: [{
                      label: 'Accesses',
                      data: [20, 19, 3, 5, 2, 3, 8, 10, 6, 15, 16, 18],
                      backgroundColor: [
                          'rgba(255, 99, 50, 1)',
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
                          'rgba(255,99,50,1)',
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
                    xAxes: [{
                      gridLines: {
                          display:false
                      }
                     }],
                    yAxes: [{
                        gridLines: {
                             display:false
                          },
                          ticks: {
                              beginAtZero:true
                          }
                    }]
                  }
              }

          });
        }
        else if(this.chartType == 'line'){

        this.baseChart = new Chart(this.baseCanvas.nativeElement, {

            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "Accesses",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    }
                ]
            }

        });
        }
        else if(this.chartType == 'pie'){
          this.baseChart = new Chart(this.baseCanvas.nativeElement, {

           type: 'pie',
           data: {
               labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
               datasets: [{
                   label: '# of Votes',
                   data: [12, 19, 3, 5, 2, 3],
                   backgroundColor: [
                       'rgba(255, 99, 132, 0.2)',
                       'rgba(54, 162, 235, 0.2)',
                       'rgba(255, 206, 86, 0.2)',
                       'rgba(75, 192, 192, 0.2)',
                       'rgba(153, 102, 255, 0.2)',
                       'rgba(255, 159, 64, 0.2)'
                   ],
                   hoverBackgroundColor: [
                       "#FF6384",
                       "#36A2EB",
                       "#FFCE56",
                       "#FF6384",
                       "#36A2EB",
                       "#FFCE56"
                   ]
               }]
           }

       });
        }

  }
  ngAfterViewInit(){
      this.headerTitle = this.textHeader;
  }

}
