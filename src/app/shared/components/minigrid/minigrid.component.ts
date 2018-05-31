import { Component, OnInit, ViewChild, AfterViewInit, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs/Observable';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { merge } from 'rxjs/observable/merge';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';
import { ColumnSetting, ColumnMap } from '../../models/columnsetting';

@Component({
  selector: 'minigrid',
  templateUrl: './minigrid.component.html',
  styleUrls: ['./minigrid.component.scss']
})
export class MinigridComponent implements OnChanges {

  @Input() records;
  @Input() caption: string;
  keys: string[];
  @Input() settings: ColumnSetting[];
  columnMaps: ColumnSetting[];
  constructor() {
    //this.populateGrid();
  }

  populateGrid() {
    debugger;
    let data = this.records;
    if (this.settings) {
      this.columnMaps = this.settings
        .map(col => new ColumnMap(col));
    } else {
      this.columnMaps = Object.keys(this.records[0])
        .map(key => {
          return new ColumnMap({ primaryKey: key });
        });
    }
  }


  ngOnChanges() {
    this.populateGrid();
  }

}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}
