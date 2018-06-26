import { Component, ViewChild, Input, OnChanges, ViewChildren, ViewContainerRef, ComponentFactoryResolver, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { ColumnSetting, ColumnMap } from '../../models/columnsetting';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material';
import { ConfirmmodalComponent } from '../confirmmodel/confirmmodel.component';
import 'rxjs/add/operator/merge';
import { TableConfig, SmartGrid } from '../../models/TableConfig';
import { MinigridService } from '../../services/minigrid.service';

@Component({
  selector: 'minigrid',
  templateUrl: './minigrid.component.html',
  styleUrls: ['./minigrid.component.scss']
})
export class MinigridComponent {

  
  @Input() config: TableConfig;
  @Input() records: any;

  caption?: string;
  columnMaps: ColumnSetting[];
  loading: boolean = false;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns;
  dataSource = new MatTableDataSource();
  public pageSize;
  public currentPage = 0;
  public totalSize = 0;

  totalCount: number;
  @Output() onDeleteCustomer = new EventEmitter();
  @Output() onPageSwitch = new EventEmitter();

  message: string = "";

  @ViewChildren('matrow', { read: ViewContainerRef }) containers;
  expandedRow: number;
  toShow: boolean = false;
  @Output() deletedRow = new EventEmitter<any>();
  selection = new SelectionModel<any>(true, []);

  constructor(
    private resolver: ComponentFactoryResolver,
    public dialog: MatDialog,
    private gridservice: MinigridService) {
  }

  ngOnChanges() {
    this.populateGrid();
  }

  populateGrid() {
    this.gridservice.Initialize(this.config, this.records);
    this.gridservice.Setup();
    this.displayedColumns = this.gridservice.displayedColumns;
    this.columnMaps = this.gridservice.columns;
    this.totalCount = this.gridservice.total;
    this.totalSize = this.gridservice.total;
    this.dataSource = this.gridservice.dataSource;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
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
  }

  Initialize() {
    this.gridservice._config = this.config;
    this.gridservice._apiResponse = this.records;
  }





  sortData(sort: Sort) {
    // if (sort.direction == "asc") {
    //   this.config.data = this.sortObjectsArray(this.data, sort.active);
    //   this.dataSource = new MatTableDataSource(this.data);
    // }
    // else {
    //   this.config.data = this.config.data.reverse();
    //   this.dataSource = new MatTableDataSource(this.data);
    // }
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
      data: { modalTitle: "Delete Task Confirmation", modalBody: "Are you sure you want to delete this task?" }
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
