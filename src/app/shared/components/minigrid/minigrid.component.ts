import { Component, ViewChild, Input, OnChanges, ViewChildren, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { ColumnSetting, ColumnMap } from '../../models/columnsetting';
import { TableConfig } from '../../models/TableConfig';

@Component({
  selector: 'minigrid',
  templateUrl: './minigrid.component.html',
  styleUrls: ['./minigrid.component.scss']
})
export class MinigridComponent implements OnChanges {

  @Input() config: any;
  keys: string[];
  caption:string;
  columnMaps: ColumnSetting[];
  @ViewChild(MatSort) sort: MatSort;
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
  }

  expandRow(index: number) {
    if (this.expandedRow != null) {
      this.containers.toArray()[this.expandedRow].clear();
    }
    if (this.expandedRow === index) {
      this.expandedRow = null;
    } else {
      const container = this.containers.toArray()[index];
      const factory: any = this.resolver.resolveComponentFactory(this.config.detailComponent);
      const messageComponent = container.createComponent(factory);
      messageComponent.instance.rowdata = this.dataSource[index];
      this.expandedRow = index;
    }
  }

  clearExbandableRow() {
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
    const part = this.config.data.slice(start, end);
    this.dataSource = part;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  populateGrid() {
    this.dataSource = this.config.data;
    this.totalSize = this.config.data.length;
    if (this.config.columns) {
      this.columnMaps = this.config.columns
        .map(col => new ColumnMap(col));
    } else {
      this.columnMaps = Object.keys(this.config.data[0])
        .map(key => {
          return new ColumnMap({
            primaryKey: key,
            header: key.slice(0, 1).toUpperCase() +
              key.replace(/_/g, ' ').slice(1),
            format: 'default',
          });
        });
    }
    this.displayedColumns = this.columnMaps.map(x => x.primaryKey);
    if (this.config.canExpand) {
      this.displayedColumns.unshift('expand');
    }
    if (this.config.canSelect) {
      this.displayedColumns.unshift('select');
    }

    this.iterator();
    this.caption = this.config.caption;
  }

  sortData(sort: Sort) {
    if (sort.direction == "asc") {
      this.config.data = this.sortObjectsArray(this.config.data, sort.active);
      this.dataSource = new MatTableDataSource(this.config.data);
    }
    else {
      this.config.data = this.config.data.reverse();
      this.dataSource = new MatTableDataSource(this.config.data);
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
      objectsArray.forEach(function (value) {
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
