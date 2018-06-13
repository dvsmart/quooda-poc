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
    debugger;
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
    debugger;
    this.taskservice.getTasksData().subscribe(x => this.data = x);
  }

  deleteTask($event) {
    var item = this.taskservice.getTasks().indexOf($event);
    if (item > -1) {
      let freshData = this.taskservice.getTasks();
      console.log(freshData.length);
      freshData.splice(item, 1);
      console.log(freshData.length);
      //console.log(this.data.length);
      this.data = freshData;
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


  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '600px';
    dialogConfig.hasBackdrop = true;

    dialogConfig.data = {
      id: 1,
      title: 'Add Task'
    };

    const dialogRef = this.dialog.open(FormdialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data != "") {
          //alert("Dialog output:" + JSON.stringify(data));
          this.taskservice.addTask(data).subscribe(a => { this.taskservice.getTasksData().subscribe(x => this.data = x); });
          ;
        }
      }
    );
  }

}
