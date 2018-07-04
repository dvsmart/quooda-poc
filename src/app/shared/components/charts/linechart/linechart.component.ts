import { Component, OnInit, Input } from '@angular/core';
import { ChartBaseComponent } from '../chart-base';
import { Chart } from 'Chart.js'

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent extends ChartBaseComponent {
chart: any;

ngOnInit(){
  this.chart =  new Chart('line', {
    type: 'line',
    data: {
      labels: ["January","February","March","April","May","June","July"],
      datasets: [
        { 
          data: [65,59,80,81,56,55,40],
          borderColor: "rgb(75, 192, 192)",
          fill: false,
          lineTension:0.1
        }
      ],
    },
    options: {
      responsive:true,
      title: { display: true, text: 'Risks Summary'},
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

}
