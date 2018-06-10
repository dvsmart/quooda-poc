import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../model/task';
import { ColumnSetting } from '../../../../shared/models/columnsetting';
import { DatePipe } from '@angular/common';
import { TaskdetailComponent } from '../taskdetail/taskdetail.component';
import { TableConfig } from '../../../../shared/models/TableConfig';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  tableConfig: TableConfig = new TableConfig();
  @Input() filter: any;
  @Input() dueType: any;
  constructor(private taskservice: TaskService,private datePipe: DatePipe) {
  }

  ngOnChanges() {
    this.tableConfig.data = [];
    if (this.filter != null && this.filter != "" && this.filter != undefined) {
      this.tableConfig.data= this.taskservice.getTasks().filter(x => x.status == this.filter);
    }
    if (this.filter === 'all') {
      this.tableConfig.data = this.taskservice.getTasks();
    }
    if (this.dueType != null && this.dueType != undefined) {
      if (typeof parseInt(this.dueType) === "number") {
        this.tableConfig.data = this.taskservice.getTasks().filter(x => x.dueDate.toLocaleDateString() <= this.datePipe.transform(new Date() + this.dueType,'dd/MM/yyyy'));
      } else if (this.dueType == 'today') {
        this.tableConfig.data = this.taskservice.getTasks().filter(x => x.dueDate.toLocaleDateString() <= this.datePipe.transform(new Date,'dd/MM/yyyy'));
      } else if (this.dueType == 'all') {
        this.tableConfig.data = this.taskservice.getTasks();
      } else if (this.dueType == 'overdue') {
        this.tableConfig.data = this.taskservice.getTasks().filter(x => x.dueDate.toLocaleDateString() > this.datePipe.transform(new Date,'dd/MM/yyyy'));
      }
    }
  }

  ngOnInit() {
    this.tableConfig.data = this.taskservice.getTasks();
    let columns =
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
        },
        {
          primaryKey: 'tasktype',
          header: 'Task Type'
        },
        {
          primaryKey: 'status',
          header: 'Status'
        },
        {
          primaryKey: 'dueDate',
          header: 'Due Date',
          format: 'date'
        }
      ];
      this.tableConfig.columns = columns;
      this.tableConfig.detailComponent = TaskdetailComponent;
      this.tableConfig.canExpand = true;
      this.tableConfig.canSort = true;
  }

}
