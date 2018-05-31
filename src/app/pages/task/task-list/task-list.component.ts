import { Component, OnInit } from '@angular/core';
import { GridOption, ColumnOption } from '../../../shared/models/miniGrid';
import { TaskService } from '../../../services/task.service';
import { ColumnSetting } from '../../../shared/models/columnsetting';
import { GithubIssue, GithubApi } from '../../../shared/components/minigrid/minigrid.component';
import { Observable } from 'rxjs/Observable';
import { Task } from '../../../viewmodel/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  data: Task[];
  columns: ColumnOption[];
  projectSettings: ColumnSetting[];
  constructor(private taskservice: TaskService) {
    this.data = this.taskservice.getTasks();
    this.projectSettings =
      [
        {
          primaryKey: 'dataId',
          header: 'Data Id'
        },
        {
          primaryKey: 'description',
          header: 'Description'
        },
        {
          primaryKey: 'name',
          header: 'name'
        },
        {
          primaryKey: 'addedOn',
          header: 'Added On'
        },
        {
          primaryKey: 'priority',
          header: 'Priority',
          format:'currency'
        },
        {
          primaryKey: 'tasktype',
          header: 'Task Type'
        }
      ];
  }

  ngOnInit() {

  }

}
