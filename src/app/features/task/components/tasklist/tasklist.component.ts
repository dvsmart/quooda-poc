import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../model/task';
import { ColumnSetting } from '../../../../shared/models/columnsetting';
import { TaskType } from '../../model/TypeEnum';
import { TaskStatus } from '../../model/statusEnum';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  data: Task[];
  projectSettings: ColumnSetting[];
  @Input() filter: any;
  @Input() dueType: any;

  constructor(private taskservice: TaskService,private datePipe: DatePipe) {
  }

  ngOnChanges() {
    if (this.filter != null && this.filter != "" && this.filter != undefined) {
      this.data = this.taskservice.getTasks().filter(x => x.status == this.filter);
    }
    if (this.filter === 'all') {
      this.data = this.taskservice.getTasks();
    }
    if (this.dueType != null && this.dueType != undefined) {
      if (typeof parseInt(this.dueType) === "number") {
        this.data = this.taskservice.getTasks().filter(x => x.dueDate.toLocaleDateString() <= this.datePipe.transform(new Date() + this.dueType,'dd/MM/yyyy'));
      } else if (this.dueType == 'today') {
        this.data = this.taskservice.getTasks().filter(x => x.dueDate.toLocaleDateString() <= this.datePipe.transform(new Date,'dd/MM/yyyy'));
      } else if (this.dueType == 'all') {
        this.data = this.taskservice.getTasks();
      } else if (this.dueType == 'overdue') {
        this.data = this.taskservice.getTasks().filter(x => x.dueDate.toLocaleDateString() > this.datePipe.transform(new Date,'dd/MM/yyyy'));
      }
    }
  }

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
  }

}
