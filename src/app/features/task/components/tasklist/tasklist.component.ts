import { Component, OnInit } from '@angular/core';
import { TableConfig } from '@app/shared/models/TableConfig';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  columns: string[];
  columnsConfig: TableConfig;
  constructor() { }

  ngOnInit() {
    this.columnsConfig = new TableConfig('Tasks',5);
    this.columnsConfig.dataUrl = 'Task/Taskforgrid';
    this.columnsConfig.enableAdd = false;
    const columns =
      [
        {
          primaryKey: 'name',
          header: 'Task Name'
        },
        {
          primaryKey: 'startDate',
          header: 'Start Date',
          format: 'date'
        },
        {
          primaryKey: 'dueDate',
          header: 'Due Date',
          format: 'date'
        }
        // ,
        // {
        //   primaryKey: 'status',
        //   header: 'Status',
        // },
        // {
        //   primaryKey: 'priority',
        //   header: 'Priority'
        // }
      ];
    this.columnsConfig.columns = columns;
  }

}
