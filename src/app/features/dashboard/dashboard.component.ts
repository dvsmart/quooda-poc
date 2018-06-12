import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task/service/task.service';
import { Chart } from '../../shared/models/chart';
import { TaskStatus } from '../task/model/statusEnum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartData: Chart[] = [];
  constructor(private taskservice: TaskService) { }

  ngOnInit() {
    var tasks = this.taskservice.getTasks();
    var a = tasks.reduce(function (r, a) {
      r[a.status] = r[a.status] || [];
      r[a.status].push(a);
      return r;
    }, Object.create(null));
    Object.keys(a).forEach(k=>{
      this.chartData.push({
        label: k,
        data:a[k].length
      })
    })
  }





}
