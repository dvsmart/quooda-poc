import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSidenav } from '@angular/material';
import { TaskFilterList } from '@app/features/task/model/TaskFilterList';
import { DueType } from '@app/features/task/model/dueType';
import { TaskService } from '@app/features/task/service/task.service';
import { TableConfig } from '@app/shared/models/TableConfig';
import { Task } from '@app/features/task/model/task';
import { AddtaskComponent } from '@app/features/task/components/addtask/addtask.component';
import { Subscription } from '../../../../node_modules/rxjs';
import { MessageService, Payload } from '@app/shared/services/message.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  taskGrid: TableConfig;
  taskFilters: TaskFilterList[] = [];
  dueTypes: DueType[] = [];
  tasks: Task[];
  apiUrl: string;
  showEditForm: boolean;
  subscription: Subscription;
  data: any;
  @ViewChild('sidenav') sidenav : MatSidenav;
 
  constructor(private messageservice: MessageService,private taskservice: TaskService, private dialog: MatDialog) {
    this.subscription = this.messageservice.getMessage().subscribe((payload: Payload) => {
      if (payload.IsNew()) {
        this.addRecord();
      }
      if (payload.IsCancel()) {
        this.close();
      }
      if (payload.IsEdit()) {
        this.edit(payload.id);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addRecord() {
    this.showEditForm = true;
  }

  close() {
    this.showEditForm = false;
  }

  edit(id) {
    this.showEditForm = true;
    this.taskservice.getSingle(id).subscribe(x => {this.data = x;});
  }

  ngOnInit() {
    this.Initialize();
  }

  toggleSidenav(){
    this.sidenav.toggle();
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
    this.taskGrid = new TableConfig('Tasks', 5, false, true);
    this.taskGrid.dataUrl = 'Task/Taskforgrid';
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
      ];
    this.taskGrid.columns = columns;
  }


  

  deleteTask($event) {
    if ($event != null) {
      this.taskservice.deleteTask($event.id).subscribe(() => {
        this.taskservice.get(1, this.taskGrid.pageSize).subscribe(x => this.tasks = x);
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
          this.taskservice.get(1, this.taskGrid.pageSize).subscribe(x => this.tasks = x);
        }
      }
    );
  }


}
