import { Component, OnInit } from '@angular/core';
import { TaskStatus } from './model/statusEnum';
import { ListConfig } from '../../shared/models/listconfig';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FormdialogComponent } from '../../shared/components/formdialog/formdialog.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  filters: string[] = ["InProgress", "Not Started", "On Hold", "Completed", "Abandoned"];
  taskFilters: ListConfig[] = [];
  foods = [
    {value: 'steak-0', viewValue: 'Risk Actions'},
    {value: 'pizza-1', viewValue: 'Checklist'},
    {value: 'tacos-2', viewValue: 'Others'}
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.taskFilters = [
      {
        caption: 'InProgress',
        iconName: 'star',
        route: ''
      },
      {
        caption: 'Not Started',
        iconName: 'schedule',
        route: ''
      },
      {
        caption: 'On Hold',
        iconName: 'schedule',
        route: ''
      },
      {
        caption: 'Completed',
        iconName: 'check',
        route: ''
      },
      {
        caption: 'Abandoned',
        iconName: 'delete',
        route: ''
      },
      {
        caption: 'Prioity',
        iconName: 'error',
        route: ''
      },
      {
        caption: 'Today',
        iconName: 'today',
        route: ''
      }
    ]
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

    this.dialog.open(FormdialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(FormdialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {alert("Dialog output:"+ JSON.stringify(data));}
  );
  }

}
