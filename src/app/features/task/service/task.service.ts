import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { TaskType } from '../model/TypeEnum';
import { TaskStatus } from '../model/statusEnum';
import { DueType } from '../model/dueType';

@Injectable()
export class TaskService {
  tasks: Task[] = [];
  duetypes: DueType[] = [];
  constructor() { }

  getDueTypes() {
    this.duetypes = [new DueType('Show All'), new DueType('overdue'), new DueType('', "7"), new DueType('', "31"), new DueType('', "15")];
    return this.duetypes;
  }

  getTasks() {
    for (let index = 1; index < 50; index++) {
      this.tasks.push(
        {
          id: index,
          dataId: 'TA101' + index.toString(),
          description: 'Some Task Description' + ' Task Name ' + index.toString(),
          name: 'Task Name ' + index.toString(),
          addedOn: new Date(2018, 5, 10),
          addedBy: 'Vijay ' + index,
          tasktype: TaskType[TaskType.Scheduled],
          status: TaskStatus[TaskStatus.InProgress],
          dueDate: new Date(2018, 5, 20)
        }
      )
    }



    for (let index = 1; index < 40; index++) {
      this.tasks.push(
        {
          id: index,
          dataId: 'TA2001' + index.toString(),
          description: 'Some Task Description' + ' Task Name ' + index.toString(),
          name: 'Task Name ' + index.toString(),
          addedOn: new Date(2018, 7, 25),
          addedBy: 'Vijayk ' + index,
          tasktype: TaskType[TaskType.Scheduled],
          status: TaskStatus[TaskStatus.NotStarted],
          dueDate: new Date(2018, 7, 30)
        }
      )
    }

    for (let index = 1; index < 60; index++) {
      this.tasks.push(
        {
          id: index,
          dataId: 'TA301' + index.toString(),
          description: 'Some Task Description' + ' Task Name ' + index.toString(),
          name: 'Task Name ' + index.toString(),
          addedOn: new Date(2018, 3, 15),
          addedBy: 'Vijayk ' + index,
          tasktype: TaskType[TaskType.OneOff],
          status: TaskStatus[TaskStatus.Completed],
          dueDate: new Date(2018, 3, 30)
        }
      )
    }

    for (let index = 1; index < 30; index++) {
      this.tasks.push(
        {
          id: index,
          dataId: 'TA301' + index.toString(),
          description: 'Some Task Description' + ' Task Name ' + index.toString(),
          name: 'Task Name ' + index.toString(),
          addedOn: new Date,
          addedBy: 'Vijayk ' + index,
          tasktype: TaskType[TaskType.OneOff],
          status: TaskStatus[TaskStatus.OnHold],
          dueDate: new Date(2018, 6, 10)
        }
      )
    }

    for (let index = 1; index < 70; index++) {
      this.tasks.push(
        {
          id: index,
          dataId: 'TA301' + index.toString(),
          description: 'Some Task Description' + ' Task Name ' + index.toString(),
          name: 'Task Name ' + index.toString(),
          addedOn: new Date,
          addedBy: 'Vijayk ' + index,
          tasktype: TaskType[TaskType.OneOff],
          status: TaskStatus[TaskStatus.Abandoned],
          dueDate: new Date(2017, 7, 30)
        }
      )
    }
    return this.tasks;
  }
}
