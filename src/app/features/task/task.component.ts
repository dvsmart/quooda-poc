import { Component, OnInit, Output } from '@angular/core';
import { TaskStatus } from './model/statusEnum';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { FormdialogComponent } from '../../shared/components/formdialog/formdialog.component';
import { TaskFilterList } from './model/TaskFilterList';
import { DueType } from './model/dueType';
import { TaskService } from './service/task.service';
import { TableConfig } from '../../shared/models/TableConfig';
import { TaskdetailComponent } from './components/taskdetail/taskdetail.component';
import { Task } from './model/task';
import { Observable } from 'rxjs/Observable';
import { AddtaskComponent } from './components/addtask/addtask.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tableConfig: TableConfig = new TableConfig();
  taskFilters: TaskFilterList[] = [];
  data: Task[] | Observable<Task[]> | any;
  dueTypes: DueType[] = [];
  constructor(private dialog: MatDialog, private taskservice: TaskService) { }
  selectedFilter: any;
  caption: string;
  searchValue: string;
  selectedDuetype: any;


  ngOnInit() {
    const keys = Object.keys(TaskStatus).filter(k => typeof TaskStatus[k as any] === "number");
    keys.forEach(k => { this.taskFilters.push(new TaskFilterList(k, 'task/' + k)) });
    this.dueTypes = this.taskservice.getDueTypes();
    this.taskservice.getTasksData().subscribe(x => this.data = x);
    this.tableConfig.pageSize = 10;
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
    //this.tableConfig.columns = columns;
    this.tableConfig.detailComponent = TaskdetailComponent;
    this.tableConfig.canExpand = true;
    this.tableConfig.canSort = true;
    this.tableConfig.canSelect = true;
    this.tableConfig.canDelete = true;
  }

  ngOnChanges() {
    this.taskservice.getTasksData().subscribe(x => this.data = x);
  }

  deleteTask($event) {
    var item = this.taskservice.getTasks().indexOf($event);
    if (item > -1) {
      let freshData = this.taskservice.getTasks();
    }
  }

  onFilterchange(e: any) {
    this.selectedFilter = e.filterId;
    this.caption = e.caption;
  }

  onDueTypechange(event) {
    this.selectedDuetype = event.value;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.searchValue = filterValue;
  }


  addTask() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '1000px';
    dialogConfig.height = '600px';
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      id: 1,
      title: 'Add Task'
    };
    const dialogRef = this.dialog.open(AddtaskComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if (data != "") {
          // this.taskservice.addTask(data).subscribe(a => { this.taskservice.getTasksData().subscribe(x => this.data = x); });
          this.taskservice.getTasksData().subscribe(x => this.data = x);
        }
      }
    );
  }
}
