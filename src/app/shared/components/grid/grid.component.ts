import { Component, OnInit, ViewChild, Input, OnChanges, ViewChildren, ViewContainerRef, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator, Sort, PageEvent } from '@angular/material';
import { Element } from '@angular/compiler';
import { element } from 'protractor';
import { GridModel, ColumnModel, ColumnType, PagingModel, SortDirection } from '../../../viewmodel/grid';
import { ConfirmmodalComponent } from '../confirmmodel/confirmmodel.component';
import { CustomerService } from '../../../services/customerService';

@Component({
  selector: 'smart-grid',
  templateUrl: './grid.Component.html',
  styleUrls: ['./grid.Component.scss']
})

export class GridComponent implements OnChanges, OnInit {
  displayedColumns = [];
  isLoading: boolean = false;
  dataSource: any;
  errorMessage: string;
  selectedRowIndex: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  customGridModel: GridModel;
  @Input() gridInput: GridModel;
  _searchBy: string;
  pagingModel: PagingModel;

  @ViewChildren('matrow', { read: ViewContainerRef }) containers;
  expandedRow: number;
  constructor(private customerService: CustomerService, public dialog: MatDialog,private resolver: ComponentFactoryResolver) {
  }


  ngOnChanges(changes: any): void {
  }
  ngOnInit(): void {
    this.customGridModel = this.gridInput;
    if (this.customGridModel == undefined) {
      return;
    }
    if( this.customGridModel.showExpandableRow)
    {
    this.displayedColumns.push("expand");
    }
    this.customGridModel.columns.map((x: ColumnModel) => {
      this.displayedColumns.push(x.columnDefinition);
    });
    if( this.customGridModel.actions != null && this.customGridModel.actions !=undefined
      && this.customGridModel.actions.length>0)
    {
    this.displayedColumns.push("action");
    }

    this.dataSource = new MatTableDataSource(this.customGridModel.data);
    this.pagingModel = this.customGridModel.pageModel;
  }

  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
  }
  sortData(sort: Sort) {
    this.clearExbandableRow();
    this.pagingModel.sortDirection = sort.direction == "asc" ? SortDirection.Ascending : SortDirection.Desccending;
    this.pagingModel.sortColumn = sort.active;
    let pagedData = this.customerService.getCustomerDetails(this.pagingModel);
    this.dataSource = new MatTableDataSource(pagedData);
  }

  getPagedProductData(event?: PageEvent) {
    this.clearExbandableRow();
    if (event.pageSize != this.pagingModel.pageSize) {
      this.pagingModel.pageIndex = 0;
    }
    else {
      this.pagingModel.pageIndex = event.pageIndex;
    }
    this.pagingModel.pageSize = event.pageSize;
    let pagedData = this.customerService.getCustomerDetails(this.pagingModel);
    this.dataSource = new MatTableDataSource(pagedData);
  }

  get searchBy(): string {
    return this._searchBy;
  }
  set searchBy(value: string) {
    this._searchBy = value;
    this.performFilter(this.searchBy)

  }

  performFilter(searchBy: string): void {
    this.clearExbandableRow();
    var users: any;
    this.dataSource = new MatTableDataSource([]);
    this.pagingModel.searchBy = searchBy;
    let pagedData = this.customerService.getCustomerDetails(this.pagingModel);
    this.dataSource = new MatTableDataSource(pagedData);
  }
  reloadGrid(): void {
    this.clearExbandableRow();
    this.dataSource = new MatTableDataSource([]);
    this.pagingModel = new PagingModel();
    let pagedData = this.customerService.getCustomerDetails(this.pagingModel);
    this.dataSource = new MatTableDataSource(pagedData);
  }


  expandRow(index: number) {
    console.log(index);
    if (this.expandedRow != null) {
      // clear old message
      this.containers.toArray()[this.expandedRow].clear();
    }
    if (this.expandedRow === index) {
      this.expandedRow = null;
    } else {
      const container = this.containers.toArray()[index];
      const factory: any = this.resolver.resolveComponentFactory(this.customGridModel.ExpandableComponent);
      const messageComponent = container.createComponent(factory);

      messageComponent.instance.rowdata = this.dataSource.data[index];
      this.expandedRow = index;
    }
  }

  clearExbandableRow()
  {
    if (this.expandedRow != null) {
      // clear old message
      this.containers.toArray()[this.expandedRow].clear();
    }
    this.expandedRow = null;
  }
  deleteSelected(row):void{
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
      data: { modalTitle: "Confimation Box", modalBody: "Are you sure you want to delete the customer?" }
    })
    dialogref.afterClosed().subscribe(result => {

      if (result) {
        this.customerService.deleteCustomer(rowId).subscribe(x => {
          this.closeInformationDialog();
          if (x) {
            this.reloadGrid();
          }
          else {
          }
        });
      }
    });
  }
}



