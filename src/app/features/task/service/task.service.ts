import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable()
export class TaskService {
 tasks: Task[]
  constructor() { }

  getTasks() {
    this.tasks = [];
    for (let index = 0; index < 5; index++) {
      this.tasks.push(
        {
          id: index,
          dataId: 'TA101' + index.toString(),
          description: 'Some Task Description' + ' Task Name ' + index.toString(),
          name: 'Task Name ' + index.toString(),
          addedOn: new Date,
          addedBy: 'Vijay ' + index,
        }
      )
    }
    return this.tasks;
  }
}
