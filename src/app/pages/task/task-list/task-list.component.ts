import { Component, OnInit } from '@angular/core';
import { GridOption, ColumnOption } from '../../../shared/models/miniGrid';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  gridData: any;
  columns: ColumnOption[];
  constructor(private taskservice: TaskService) {
    this.columns = [{
      field: 'created',
      title:'Created',
    },{
      field:'state',
      title:'state'
    },{
      field:'number',
      title:'Task Id'
    }
    ,{
      field:'title',
      title:'Title'
    }]
    let url = 'somurl';
    this.gridData = new GridOption(this.columns,url);
   }
   //created', 'state', 'number', 'title'

  ngOnInit() {
  }

}
