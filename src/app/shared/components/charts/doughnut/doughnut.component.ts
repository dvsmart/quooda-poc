import { Component, OnInit } from '@angular/core';
import { ChartBaseComponent } from '../chart-base';
import Chart = require('chart.js');

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent extends ChartBaseComponent {

  constructor() {
    super();
   }

  ngOnInit() {
    var myDoughnutChart = new Chart('dough', {
      type: 'doughnut',
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
        title: { display: true, text: 'KPI Compliance doughnet'},
        legend: {
          display: true
        }
      }
  });
  }

}
