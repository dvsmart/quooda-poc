import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TableConfig } from '../models/TableConfig';
import { ColumnSetting, ColumnMap } from '../models/columnsetting';

@Injectable()
export class MinigridService {

  dataSource = new MatTableDataSource();
  columns: ColumnSetting[];
  message: string = "";
  total: number;
  pageSize: number;
  caption?: string;
  displayedColumns: string[];

  _config: TableConfig;
  _apiResponse: any;

  constructor() { }

  Initialize(config: TableConfig,apiResponse: any){
    this._config = config;
    this._apiResponse = apiResponse;
  }

  Setup() {
    if (this.isValidConfig() && this.isValidResponse()) {
      this.setMessage();
      this.setCaption();
      this.setDataSource();
      this.setColumnsFromConfig();
      this.setColumnsFromDataRow();
      this.setTableColumns();
      this.setTablePagination();
    }
  }

  setCaption() {
    if (this._config.caption != "") {
      this.caption = this._config.caption;
    }
  }

  setTableColumns() {
    this.displayedColumns = this.columns.map(x => x.primaryKey);
    if (this._config.canExpand && this.displayedColumns != null) {
      this.displayedColumns.unshift('expand');
    }
    if (this._config.canSelect && this.displayedColumns != null) {
      this.displayedColumns.unshift('select');
    }
    if (this._config.canDelete && this.displayedColumns != null) {
      this.displayedColumns.push('delete');
    }
  }

  isValidResponse(): boolean {
    if (this._apiResponse != null && this._apiResponse != undefined && this._apiResponse.data.length > 0) {
      return true;
    }
    return false;
  }

  isValidColumns() {
    if (this.columns != null && this.columns != undefined) {
      return true;
    }
    else {
      return false;
    }
  }

  setTablePagination() {
    this.total = this._apiResponse.totalCount;
    this.pageSize = this._apiResponse.pageSize;
  }

  setDataSource() {
    this.dataSource = new MatTableDataSource(this._apiResponse.data);
  }

  isValidConfig(): boolean {
    if (this._config != null && this._config != undefined) {
      return true;
    }
    return false;
  }



  setMessage() {
    if (!this.isValidResponse()) {
      this.message = "No records found";
    }
  }


  setColumnsFromConfig() {
    if (this._config.columns != null) {
      this.columns = this._config.columns.map(col => new ColumnMap(col));
    }
  }

  setColumnsFromDataRow() {
    this.columns = Object.keys(this._apiResponse.data[0])
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
