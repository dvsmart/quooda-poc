import { Component, OnInit } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';
import { TableConfig } from '../../shared/models/TableConfig';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  watcher: Subscription;
  activeMediaQuery = "";

  columns: any[] = [];
  api:string;
  tableConfig: TableConfig;
  counter = 0;
  constructor(private media: ObservableMedia) {
  }

  showMessage(){
    this.counter++;
  }

  ngOnInit() {
    this.watcher = this.media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if ( change.mqAlias == 'xs') {
         console.log(change.mqAlias);
      }
    });
    this.columns = ['name','description','startDate','dueDate']
    this.api = 'Task/Taskforgrid?page=' + 1 + '&pageSize=' + 10;
    this.tableConfig = new TableConfig(5);
    let columns =
      [
        {
          primaryKey: 'description',
          header: 'Description'
        },
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
        },
        {
          primaryKey: 'status',
          header: 'Status',
        },
        {
          primaryKey: 'priority',
          header: 'Priority'
        }
      ];
    this.tableConfig.columns = columns;
  }

}
