import { Component, OnInit } from '@angular/core';
import { TaskStatus } from './model/statusEnum';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { FormdialogComponent } from '../../shared/components/formdialog/formdialog.component';
import { TaskFilterList } from './model/TaskFilterList';
import { DueType } from './model/dueType';
import { TaskService } from './service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  taskFilters: TaskFilterList[] = [];

  dueTypes: DueType[] = [];
  constructor(private dialog: MatDialog, private taskservice: TaskService) { }
  selectedFilter: any;
  caption: string;
  selectedDuetype: any;
  ngOnInit() {
    const keys = Object.keys(TaskStatus).filter(k => typeof TaskStatus[k as any] === "number");
    keys.forEach(k => { this.taskFilters.push(new TaskFilterList(k, 'task/' + k)) });
    this.dueTypes = this.taskservice.getDueTypes();
  }

  onFilterchange(e: any) {
    this.selectedFilter = e.filterId;
    this.caption = e.caption;
  }

  onDueTypechange(event) {
    this.selectedDuetype = event.value;
  }



  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '600px';
    dialogConfig.hasBackdrop = true;

    dialogConfig.data = {
      id: 1,
      title: 'Edit Task'
    };

    const dialogRef = this.dialog.open(FormdialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data != "") {
          alert("Dialog output:" + JSON.stringify(data));
        }
      }
    );
  }

}
