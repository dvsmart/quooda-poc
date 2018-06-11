import { Component, ViewChild, Input, OnChanges, ViewChildren, ViewContainerRef, ComponentFactoryResolver, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { ColumnSetting, ColumnMap } from '../../models/columnsetting';
import { TableConfig } from '../../models/TableConfig';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material';
import { ConfirmmodalComponent } from '../confirmmodel/confirmmodel.component';

@Component({
  selector: 'minigrid',
  templateUrl: './minigrid.component.html',
  styleUrls: ['./minigrid.component.scss']
})
export class MinigridComponent implements OnChanges {

  @Input() config: any;
  keys: string[];
  caption: string;
  columnMaps: ColumnSetting[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageEvent: PageEvent;
  displayedColumns;
  dataSource;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  @Input() data: any;
  @Input() filter: string;
  @ViewChildren('matrow', { read: ViewContainerRef }) containers;
  expandedRow: number;
  @Output() deletedRow = new EventEmitter<any>();

  selection = new SelectionModel<any>(true, []);

  constructor(private resolver: ComponentFactoryResolver, public dialog: MatDialog, ) {
  }

  ngOnChanges() {
    if (this.dataSource != null && this.filter != "") {
      this.dataSource.filter = this.filter;
      this.dataSource = this.dataSource.filteredData
    } else {
      this.populateGrid();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.forEach(row => this.selection.select(row));
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
    const part = this.data.slice(start, end);
    this.dataSource = part;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  populateGrid() {
    let config = this.config;
    if (this.config.columns) {
      this.columnMaps = config.columns
        .map(col => new ColumnMap(col));
    } else {
      this.columnMaps = Object.keys(config.data[0])
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
    if (config.canExpand) {
      this.displayedColumns.unshift('expand');
    }
    if (config.canSelect) {
      this.displayedColumns.unshift('select');
    }
    if (config.canDelete) {
      this.displayedColumns.push('action');
    }
    console.log(this.displayedColumns);
    this.caption = config.caption;
    this.dataSource = new MatTableDataSource(this.data);


    this.totalSize = this.data.length;
    this.iterator();
  }

  sortData(sort: Sort) {
    if (sort.direction == "asc") {
      this.config.data = this.sortObjectsArray(this.data, sort.active);
      this.dataSource = new MatTableDataSource(this.data);
    }
    else {
      this.config.data = this.config.data.reverse();
      this.dataSource = new MatTableDataSource(this.data);
    }
  }

  deleteSelected(row): void {
    this.clearExbandableRow();
    this.openConfirmationDialog(row);
  }

  closeInformationDialog = () => {
    this.dialog.closeAll();
  }
  openConfirmationDialog = (row) => {
    var rowId = row.id;
    let dialogref = this.dialog.open(ConfirmmodalComponent, {
      height: 'auto',
      width: '400px',
      data: { modalTitle: "Delete Task Confirmation", modalBody: "Are you sure you want to delete this task - " + row.dataId.toUpperCase() + "?"}
    })
    dialogref.afterClosed().subscribe(result => {

      if (result) {
        // this.customerService.deleteCustomer(rowId).subscribe(x => {
        //   this.closeInformationDialog();
        //   if (x) {
        //     this.reloadGrid();
        //   }
        //   else {
        //   }
        // });
        this.deletedRow.emit(row);
      }
    });
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
