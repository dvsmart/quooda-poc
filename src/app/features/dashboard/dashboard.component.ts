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
