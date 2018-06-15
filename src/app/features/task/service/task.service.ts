import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { TaskType } from '../model/TypeEnum';
import { TaskStatus } from '../model/statusEnum';
import { DueType } from '../model/dueType';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TaskService {
  tasks: Task[] = [];
  taskList: any;
  duetypes: DueType[] = [];
  api = environment.apiUrl + 'task';
  private source = new BehaviorSubject(this.tasks);
  latestTasks = this.source.asObservable();

  constructor(private http: HttpClient) { }

  getDueTypes() {
    this.duetypes = [new DueType('Show All'), new DueType('overdue'), new DueType('', "7"), new DueType('', "31"), new DueType('', "15")];
    return this.duetypes;
  }

  getTasksData(): Observable<Task[]>{
    return this.http.get<Task[]>(this.api);
  }

  addTask(taskModel: any){
    return this.http.post(this.api,taskModel);
    // this.getTasksData().subscribe(x=> this.taskList = x);
    // this.source.next(this.taskList);
  }

  deleteTask(id: number){
    return this.http.delete(this.api + '/' +id,);
  }

  getTasks() {
    for (let index = 1; index < 10; index++) {
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
          dueDate: new Date(2018, 5, 20),
          startDate: new Date(2017,12,12)
        }
      )
    }



    for (let index = 1; index < 10; index++) {
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
          dueDate: new Date(2018, 7, 30),
          startDate: new Date(2017,12,12)
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

    for (let index = 1; index < 5; index++) {
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
          dueDate: new Date(2018, 6, 10),
          startDate: new Date(2017,12,12)
        }
      )
    }

    for (let index = 1; index < 3; index++) {
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
          dueDate: new Date(2017, 7, 30),
          startDate: new Date(2017,12,12)
        }
      )
    }
    return this.tasks;
  }

}
