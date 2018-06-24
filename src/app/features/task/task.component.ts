import { Component, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TaskFilterList } from './model/TaskFilterList';
import { DueType } from './model/dueType';
import { TaskService } from './service/task.service';
import { TableConfig } from '../../shared/models/TableConfig';
import { TaskdetailComponent } from './components/taskdetail/taskdetail.component';
import { Task } from './model/task';
import { Observable } from 'rxjs/Observable';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tableConfig: TableConfig = new TableConfig();
  taskFilters: TaskFilterList[] = [];
  data: Observable<Task[]>;
  dueTypes: DueType[] = [];
  totalCount: number;
  tasks: Task[];

  constructor(private dialog: MatDialog, private taskservice: TaskService, private routePath: ActivatedRoute) {
    this.routePath.params.subscribe(params => console.log(params));
  }

  searchValue: string;
  selectedDuetype: any;

  getFilterData(filter) {
    debugger;
    if (filter === undefined) {
      this.data = this.taskservice.getTasksData();
    } else {
      this.taskservice.getTasksByStatus(filter).subscribe(x=> this.tasks = x);
    }
  }

  Initialize(){
    this.dueTypes = this.taskservice.getDueTypes();
    this.taskservice.get(1, 5).subscribe(x=>this.tasks = x);
    this.tableConfig.canExpand = true;
    this.tableConfig.canSort = true;
    this.tableConfig.canSelect = true;
    this.tableConfig.canDelete = true;
    this.tableConfig.caption = "Tasks";
    this.tableConfig.pageSize = 5;
  }


  ngOnInit() {
    this.Initialize();
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
    this.tableConfig.columns = columns;
    this.tableConfig.detailComponent = TaskdetailComponent;
  }

  deleteTask($event) {
    if ($event != null) {
      this.taskservice.deleteTask($event.id).subscribe(x =>
        {
          this.taskservice.get(1, this.tableConfig.pageSize).subscribe(x=>this.tasks = x);
        })
    }
  }

  switchPage(event) {
    this.taskservice.get(event.pageIndex + 1, event.pageSize).subscribe(x=>this.tasks = x);
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
          this.taskservice.get(1, this.tableConfig.pageSize).subscribe(x=>this.tasks = x);
        }
      }
    );
  }


}
