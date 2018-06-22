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
  constructor(private dialog: MatDialog, private taskservice: TaskService,private routePath:ActivatedRoute) {
    this.routePath.params.subscribe( params => console.log(params));
   }
  
  searchValue: string;
  selectedDuetype: any;

  getFilterData(filter){
    if(filter === undefined){
      this.data = this.taskservice.getTasksData();
    }else{
      this.data = this.taskservice.getTasksByStatus(filter);
    }
  }
  

  ngOnInit() {
    this.taskservice.getTaskStatus().subscribe(x => { x.forEach(ts => this.taskFilters.push(new TaskFilterList(ts.name, '/task/' + ts.name))); });
    this.dueTypes = this.taskservice.getDueTypes();
    this.data = this.taskservice.getTasksData();
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

  deleteTask($event) {
    if ($event != null) {
      this.taskservice.deleteTask($event.id).subscribe(x => { this.data = this.taskservice.getTasksData(); })
    }
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
          this.data = this.taskservice.getTasksData();
        }
      }
    );
  }


}
