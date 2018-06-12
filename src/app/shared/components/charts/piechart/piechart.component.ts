import { Component, OnInit, Input } from '@angular/core';
import { Chart } from '../../../models/chart';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent {
  // Pie
  @Input() data : Chart[]; 

  pieChartLabels:string[] = [];//['Download Sales', 'In-Store Sales', 'Mail Sales'];
  pieChartData:number[] = [];//[300, 500, 100];
  pieChartType:string = 'pie';
  options :any = [];
 
  ngOnChanges(){
    this.data.forEach(x=>{
      this.pieChartLabels.push(x.label),
      this.pieChartData.push(x.data)
    })
    this.options = {
      legend:{
        position:'right'
      }
    }
  }

  // events
  chartClicked(e:any):void {
    console.log(e);
  }
 
  chartHovered(e:any):void {
    console.log(e);
  }

}
