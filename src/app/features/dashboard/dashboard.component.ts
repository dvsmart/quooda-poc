import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task/service/task.service';
import { Chart } from '../../shared/models/chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartData: Chart[] = [];
  cards = [
    { title: 'Risks Assessment Summary', cols: 2, rows: 1,chartName:'<app-piechart [data]="chartData"></app-piechart>' },
    { title: 'Compliance Summary', cols: 1, rows: 1,chartName:'<app-barchart></app-barchart>' },
    { title: 'Incidents Summary', cols: 1, rows: 2,chartName:' <app-linechart></app-linechart>' },
    { title: 'Live Risks', cols: 1, rows: 1,chartName:'<app-barchart></app-barchart>' }
  ];
  constructor(private taskservice: TaskService) { }

  ngOnInit() {
    this.taskservice.getTasksData().subscribe(x =>
      x.reduce(function (r, a) {
        r[a.status] = r[a.status] || [];
        r[a.status].push(a);
        return r;
      }, Object.create(null))
    )
    // Object.keys(a).forEach(k=>{
    //   this.chartData.push({
    //     label: k,
    //     data:a[k].length
    //   })
    // })
  }





}
