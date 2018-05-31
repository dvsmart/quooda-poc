import { Injectable } from '@angular/core';
import { Task, Priority, TaskStatus, TaskType } from '../viewmodel/task';
import { Observable } from 'rxjs/Observable';
import { GridModel, ColumnModel, ColumnType, ActionModel, PagingModel, SortDirection } from '../viewmodel/grid';
import { GithubApi } from '../shared/components/minigrid/minigrid.component';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService {

  tasks: Task[];
  constructor(private http: HttpClient) {
    this.tasks = this.getTasks();
  }

  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
      `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;

    return this.http.get<GithubApi>(requestUrl);
  }

  getTasks() {
    this.tasks = [];
    for (let index = 0; index < 1000; index++) {
      this.tasks.push(
        {
          id: index,
          dataId: 'TA' + index.toString(),
          description: 'Some Task Description',
          name: 'Task Name ' + index.toString(),
          priority: Priority.Moderate,
          tasktype: TaskType.OneOff,
          addedOn: new Date,
          addedBy: 'Vijay'
        }
      )
    }
    return this.tasks;
  }

  getTotal() {
    return this.tasks.length;
  }

  getDate() {
    return this.tasks;
  }

  getTaskGridModel = () => {
    var taskGrid = new GridModel();
    let columns = [
      new ColumnModel("id", "Id", ColumnType.Label, "col-lg-2"),
      new ColumnModel("dataId", "Task Id", ColumnType.Label, "col-lg-5"),
      new ColumnModel("name", "Name", ColumnType.Label, "col-lg-3"),
      new ColumnModel("description", "Description", ColumnType.Label, "col-lg-3"),
      new ColumnModel("priority", "Priority", ColumnType.Label, "col-lg-3"),
      new ColumnModel("tasktype", "Type", ColumnType.Label, "col-lg-3"),
      new ColumnModel("addedOn", "Added On", ColumnType.Label, "col-lg-3"),
      new ColumnModel("addedBy", "Added By", ColumnType.Label, "col-lg-3"),
    ];
    let actionModels = [new ActionModel("Edit", "edit", ""),
    new ActionModel("Delete", "delete", "", true, "Are you sure you want to delete?")];
    let pageModel = new PagingModel();
    pageModel.pageIndex = 0;
    pageModel.pageSize = 5;
    pageModel.pagingUrl = "";
    pageModel.sortColumn = "id";

    pageModel.sortDirection = SortDirection.Ascending;
    let data = this.getTaskDetails(pageModel);
    taskGrid.columns = columns;
    taskGrid.data = data;
    taskGrid.uniqueId = "id";
    taskGrid.title = "Tasks";
    taskGrid.actions = actionModels;
    taskGrid.showExpandableRow = false;
    taskGrid.displayAddButton = true;
    pageModel.totalRecord = this.tasks.length;
    taskGrid.pageModel = pageModel;
    return taskGrid;
  }
  getTaskDetails = (pageModel: PagingModel) => {
    let filteredItems = this.getTasks();
    if (pageModel != undefined && pageModel != null) {
      if (pageModel.searchBy != undefined && pageModel.searchBy != "" && pageModel.searchBy != null) {
        filteredItems = filteredItems.filter((item: any) => {
          return item.name.toLowerCase().startsWith(pageModel.searchBy.toLowerCase());
        });
      }

      if (pageModel.sortColumn != undefined && pageModel.sortColumn != "" && pageModel.sortColumn != null) {
        filteredItems = this.sortObjectsArray(filteredItems, pageModel.sortColumn);
        if (pageModel.sortDirection == SortDirection.Desccending) {
          filteredItems = filteredItems.reverse();
        }

      }
      let index = pageModel.pageIndex * pageModel.pageSize;
      filteredItems = filteredItems.slice(index, index + pageModel.pageSize);
    }
    return filteredItems;
  }

  sortObjectsArray = (objectsArray, sortKey) => {
    // Quick Sort:
    var retVal;

    if (1 < objectsArray.length) {
      var pivotIndex = Math.floor((objectsArray.length - 1) / 2);  // middle index
      var pivotItem = objectsArray[pivotIndex];                    // value in the middle index
      var less = [], more = [];

      objectsArray.splice(pivotIndex, 1);                          // remove the item in the pivot position
      objectsArray.forEach(function (value, index, array) {
        value[sortKey] <= pivotItem[sortKey] ?                   // compare the 'sortKey' proiperty
          less.push(value) :
          more.push(value);
      });

      retVal = this.sortObjectsArray(less, sortKey).concat([pivotItem], this.sortObjectsArray(more, sortKey));
    }
    else {
      retVal = objectsArray;
    }

    return retVal;
  }
}
