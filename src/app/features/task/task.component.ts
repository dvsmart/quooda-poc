import { Component, OnInit } from '@angular/core';
import { TaskStatus } from './model/statusEnum';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  filters: string[] = ["InProgress","Not Started","On Hold","Completed","Abandoned"];
  constructor() { }

  ngOnInit() {
  }

}
