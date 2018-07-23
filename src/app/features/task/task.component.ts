import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TaskFilterList } from '@app/features/task/model/TaskFilterList';
import { DueType } from '@app/features/task/model/dueType';
import { TaskService } from '@app/features/task/service/task.service';
import { TableConfig } from '@app/shared/models/TableConfig';
import { TaskdetailComponent } from '@app/features/task/components/taskdetail/taskdetail.component';
import { Task } from '@app/features/task/model/task';
import { AddtaskComponent } from '@app/features/task/components/addtask/addtask.component';

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
  apiUrl: string;

  constructor(private dialog: MatDialog, private taskservice: TaskService) {
    this.apiUrl = 'Task/Taskforgrid?page=' + 1 + '&pageSize=' + 10;
  }

  ngOnInit() {
    this.Initialize();
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
    //this.taskservice.get(1, 5).subscribe(x => this.tasks = x);
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
