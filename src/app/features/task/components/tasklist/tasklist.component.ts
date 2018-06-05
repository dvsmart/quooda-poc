import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../model/task';
import { ColumnSetting } from '../../../../shared/models/columnsetting';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  data: Task[];
  projectSettings: ColumnSetting[];
  constructor(private taskservice: TaskService) { }

  ngOnInit() {
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
          primaryKey: 'addedBy',
          header: 'Added By',
        }
      ];
  }

}
