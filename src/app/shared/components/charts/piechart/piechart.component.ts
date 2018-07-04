import { Component, OnInit, Input } from '@angular/core';
import { ChartBaseComponent } from '../chart-base';
import { Chart } from 'Chart.js'
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent extends ChartBaseComponent {
  chart: any;

  ngOnInit() {
    this.chart =  new Chart('pie', {
      type: 'pie',
      data: {
        labels: ["Red","Blue","Yellow"],
        datasets: [
          { 
            data: [300,50,100],
            fill: false,
            backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]
          }
        ]
      },
      options: {
        responsive:true,
        title: { display: true, text: 'Risks Summary chartTitle'},
        legend: {
          display: true
        }
      }
    });
  }

  // events
  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }

}
