import { Component, OnInit } from '@angular/core';
import { ChartBaseComponent } from '../chart-base';
import { Chart } from 'Chart.js'

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent extends ChartBaseComponent{

  ngOnInit(){
    var myBarChart = new Chart('bar', {
      type: 'bar',
      data: {
        labels: ['Blue','Red','Green'],
        datasets: [
          { 
            data: [10,20,25,38,40],
            borderColor: "#3cba9f",
            fill: true,
            backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"]
          },
          { 
            data: [10,20,25,38,40],
            borderColor: "#ffcc00",
            fill: false
          },
          { 
            data: [5,8,25,42,35],
            borderColor: "#ffcc00",
            fill: false
          },
        ]
      },
      options: {
        responsive:true,
        title: { display: true, text: 'Compliance Summary'},
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
  });
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    // let clone = JSON.parse(JSON.stringify(this.barChartData));
    // clone[0].data = data;
    // this.barChartData = clone;
  }
}
