import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TaskFilterList } from './model/TaskFilterList';
import { DueType } from './model/dueType';
import { TaskService } from './service/task.service';
import { TableConfig } from '../../shared/models/TableConfig';
import { TaskdetailComponent } from './components/taskdetail/taskdetail.component';
import { Task } from './model/task';
import { AddtaskComponent } from './components/addtask/addtask.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tableConfig: TableConfig;
  taskFilters: TaskFilterList[] = [];
  dueTypes: DueType[] = [];
  tasks: Task[];

  constructor(private dialog: MatDialog, private taskservice: TaskService) {
  }

  searchValue: string;
  selectedDuetype: any;

  getFilterData(filter) {
    if (filter === undefined) {
      this.taskservice.get(1, 5).subscribe(x => this.tasks = x);
    } else {
      this.taskservice.getTasksByStatus(filter).subscribe(x => this.tasks = x);
    }
  }

  Initialize() {
    this.dueTypes = this.taskservice.getDueTypes();
    this.taskservice.get(1, 5).subscribe(x => this.tasks = x);
    this.tableConfig = new TableConfig(5);
    let columns =
      [
        {
          primaryKey: 'description',
          header: 'Description'
        },
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
        },
        {
          primaryKey: 'status',
          header: 'Status',
        },
        {
          primaryKey: 'priority',
          header: 'Priority'
        }
      ];
    this.tableConfig.detailComponent = TaskdetailComponent;
    this.tableConfig.columns = columns;
  }


  ngOnInit() {
    this.Initialize();
  }

  deleteTask($event) {
    if ($event != null) {
      this.taskservice.deleteTask($event.id).subscribe(() => {
        this.taskservice.get(1, this.tableConfig.pageSize).subscribe(x => this.tasks = x);
      })
    }
  }

  switchPage(event) {
    this.taskservice.get(event.pageIndex + 1, event.pageSize).subscribe(x => this.tasks = x);
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
          this.taskservice.get(1, this.tableConfig.pageSize).subscribe(x => this.tasks = x);
        }
      }
    );
  }


}
