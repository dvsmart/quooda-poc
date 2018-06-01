import { Component, OnInit, ViewChild, AfterViewInit, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs/Observable';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { MatSort, Sort } from '@angular/material/sort';
import { merge } from 'rxjs/observable/merge';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';
import { ColumnSetting, ColumnMap } from '../../models/columnsetting';
import { SelectionModel } from '@angular/cdk/collections';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PeriodicElement } from '../../../viewmodel/task';

@Component({
  selector: 'minigrid',
  templateUrl: './minigrid.component.html',
  styleUrls: ['./minigrid.component.scss']
})
export class MinigridComponent implements OnChanges {

  @Input() records: any[];
  @Input() caption: string;
  keys: string[];
  @Input() settings: ColumnSetting[];
  columnMaps: ColumnSetting[];
  @ViewChild(MatSort) sort: MatSort;
  //selection = new SelectionModel<any>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  displayedColumns;
  dataSource;

  ngOnChanges() {
    this.populateGrid();
    this.displayedColumns = this.columnMaps.map(x=>x.primaryKey);
    this.dataSource = this.records;
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator.length = this.records.length;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  populateGrid() {
    let data = this.records;
    if (this.settings) {
      this.columnMaps = this.settings
        .map(col => new ColumnMap(col));
    } else {
      this.columnMaps = Object.keys(this.records[0])
        .map(key => {
          return new ColumnMap({
            primaryKey: key,
            header: key.slice(0, 1).toUpperCase() +
              key.replace(/_/g, ' ').slice(1),
            format: 'default',
          });
        });
    }
  }

  sortData(sort: Sort) {
    let sortDir = sort.direction == "asc" ? "asc" : "desc";
    if(sort.direction == "asc"){
      this.records = this.sortObjectsArray(this.records,sort.active);
      this.dataSource = new MatTableDataSource(this.records);
    }
    else{
      this.records = this.records.reverse();
      this.dataSource = new MatTableDataSource(this.records);
    }
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



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
