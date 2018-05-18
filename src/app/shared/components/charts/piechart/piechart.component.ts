import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent {
  // Pie
  pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  pieChartData:number[] = [300, 500, 100];
  pieChartType:string = 'pie';
 
  // events
  chartClicked(e:any):void {
    console.log(e);
  }
 
  chartHovered(e:any):void {
    console.log(e);
  }

}
