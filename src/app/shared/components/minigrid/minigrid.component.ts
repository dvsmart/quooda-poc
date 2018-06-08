import { Component, OnInit, ViewChild, AfterViewInit, Input, OnChanges, ViewEncapsulation, ViewChildren, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs/Observable';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
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
  @Input() detailComponent: any;

  columnMaps: ColumnSetting[];
  @ViewChild(MatSort) sort: MatSort;
  //selection = new SelectionModel<any>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageEvent: PageEvent;
  displayedColumns;
  dataSource;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  @ViewChildren('matrow', { read: ViewContainerRef }) containers;
  expandedRow: number;

  

  constructor(private resolver: ComponentFactoryResolver) {
      
  }


  ngOnChanges() {
    this.populateGrid();
    this.displayedColumns = this.columnMaps.map(x => x.primaryKey);
    this.displayedColumns.unshift('expand');
    this.dataSource = this.records;
    this.totalSize = this.records.length;
    this.iterator();
  }

  expandRow(index: number) {
    console.log(index);
    if (this.expandedRow != null) {
      this.containers.toArray()[this.expandedRow].clear();
    }
    if (this.expandedRow === index) {
      this.expandedRow = null;
    } else {
      const container = this.containers.toArray()[index];
      const factory: any = this.resolver.resolveComponentFactory(this.detailComponent);
      const messageComponent = container.createComponent(factory);

      messageComponent.instance.rowdata = this.dataSource[index];
      this.expandedRow = index;
    }
  }

  clearExbandableRow()
  {
    if (this.expandedRow != null) {
      this.containers.toArray()[this.expandedRow].clear();
    }
    this.expandedRow = null;
  }


  public getServerData(event?: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.iterator();
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.records.slice(start, end);
    this.dataSource = part;
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
    if (sort.direction == "asc") {
      this.records = this.sortObjectsArray(this.records, sort.active);
      this.dataSource = new MatTableDataSource(this.records);
    }
    else {
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
