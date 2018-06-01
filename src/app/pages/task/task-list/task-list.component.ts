import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { ColumnSetting } from '../../../shared/models/columnsetting';
import { Observable } from 'rxjs/Observable';
import { Task} from '../../../viewmodel/task';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  data: Task[];
  projectSettings: ColumnSetting[];
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
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
          header: 'Task Name'
        },
        {
          primaryKey: 'addedOn',
          header: 'Added On',
          format: 'date'
        },
        {
          primaryKey: 'priority',
          header: 'Priority',
          format: 'currency'
        },
        {
          primaryKey: 'tasktype',
          header: 'Task Type',
          format: 'enum'
        },
        {
          primaryKey: 'addedBy',
          header: 'Added By',
        },
        {
          primaryKey: 'status',
          header: 'Status',
        }
      ];
  }

  ngOnInit() {
    //this.dataSource.paginator = this.paginator;
  }

}

