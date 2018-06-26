import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TableConfig } from '../models/TableConfig';
import { ColumnSetting, ColumnMap } from '../models/columnsetting';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MinigridService {
  api = environment.apiUrl;
  dataSource = new MatTableDataSource();
  columns: ColumnSetting[];
  message: string = "";
  total: number;
  pageSize: number;
  caption?: string;
  displayedColumns: string[];

  _config: TableConfig;
  _apiResponse: any;
  data: any[];
  constructor(private httpClient: HttpClient) { }


  getData(path) {
    this.httpClient.get<any[]>(this.api + path).subscribe(x => {this.data = x; console.log(x);});
  }
  // Initialize(config: TableConfig,apiResponse: any){
  //   this._config = config;
  //   this._apiResponse = apiResponse;
  // }

  Initialize(config: TableConfig,path:string){
    this._config = config;
    this.getData(path);
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

  gridSetup(path){
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
    if (this.data != null && this.data != undefined && this.data.length > 0) {
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
    //this.total = this.data.totalCount;
    //this.pageSize = this.data.pageSize;
  }

  setDataSource() {
    this.dataSource = new MatTableDataSource(this.data);
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
    this.columns = Object.keys(this.data[0])
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
