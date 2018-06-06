import { Component, OnInit } from '@angular/core';
import { TaskStatus } from './model/statusEnum';
import { ListConfig } from '../../shared/models/listconfig';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  filters: string[] = ["InProgress", "Not Started", "On Hold", "Completed", "Abandoned"];
  taskFilters: ListConfig[] = [];
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() { }

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

}
